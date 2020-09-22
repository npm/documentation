#!/usr/bin/env node
// cli_import: include the npm cli documentation into the main docs
// 
// This script will:
// 1. Read the `releases.json` file to understand which versions of the
//    CLI should be updated.  The `releases.json` should contain an array
//    of versions, each with the following information:
//
//    `id`: A short identifier for the version, eg `v6` or `v7`.  This
//          will be used as the input folder for the documentation; an
//          instance of the CLI should reside at that path beneath the
//          `cli` directory.  (Submodules are a good idea here.)  It
//          will also be used as the output folder in the main content.
//    `version`: The full major semantic version number (eg `6.0.0`).
//          This will be used in examples in the documentation.
//    `title`: A long description of the version information.  This will
//          be used in the version picker,.
//    `branch`: The branch name for the version.
//
// 2. Read each directory specified in the `releases.json`.  The data in
//    `docs/content` will be read.  Each file will be translated in order
//    to add `redirects` (as `redirect_from` frontmatter).  Other
//    `translations` may be specified to make the data suitable for the
//    main documentation from the CLI documentation.  Finally, metadata
//    will be added so that the gatsby theme knows the GitHub repository
//    information for the content.
//
// 3. The CLI's navigation (in `docs/nav.yml`) will be added to the
//    main site's base navigation (in `../src/nav-base.yml`) to produce
//    the resulting gatsby / doctornpm navigation (in
//    `../src/gatsby-theme-doctornpm/nav.yml`).

const fs = require('fs');
const path = require('path');
const config = require('./releases.json');
const yaml = require('yaml');
const mkdirp = require('mkdirp');

const githubRepo = 'npm/cli';
const githubUrl = 'https://github.com/npm/cli';

const docsPath = path.dirname(__dirname);
const inputPath = path.join(docsPath, 'cli');
const outputPath = path.join(docsPath, 'content');

const baseNavFile = path.join(docsPath, 'src', 'nav-base.yml');
const outputNavFile = path.join(docsPath, 'src', 'gatsby-theme-doctornpm', 'nav.yml');

const cliTitle = 'npm CLI';
const cliUrl = '/cli';

const cliNavFile = path.join('docs', 'nav.yml');
const cliContentPath = path.join('docs', 'content');

const indexMarkdown = `<Index depth="1" />`;

const translations = {
    'index.mdx': {
        'frontmatter': { 'title': 'CLI documentation' },
        'mdx': indexMarkdown,
    },
    'commands/index.mdx': {
        'frontmatter': { 'title': 'CLI commands' },
        'mdx': indexMarkdown,
    },
    'configuring-npm/index.mdx': {
        'frontmatter': { 'title': 'Configuring npm' },
        'mdx': indexMarkdown,
    },
    'using-npm/index.mdx': {
        'frontmatter': { 'title': 'Using npm' },
        'mdx': indexMarkdown,
    },
};

const redirects = {
    'index.mdx': [
        '/cli-documentation',
    ],
    'commands/index.mdx': [
        '/cli-documentation/cli',
        '/cli-documentation/cli-commands'
    ],
    'commands/npm-access.md': [
        '/cli-documentation/access',
    ],
    'commands/npm-install.md': [
        '/cli-documentation/install',
    ],
    'configuring-npm/index.mdx': [
        '/cli-documentation/configuring-npm',
        '/cli-documentation/files',
    ],
    'configuring-npm/folders.md': [
        '/files/folders',
        '/files/folders.html',
    ],
    'configuring-npm/npmrc.md': [
        '/cli-documentation/files/npmrc',
        '/files/npmrc',
        '/files/npmrc.html'
    ],
    'configuring-npm/package-json.md': [
        '/configuring-npm/package.json',
        '/creating-a-packge-json-file',
        '/files/package.json',
        '/files/package.json.html',
    ],
    'configuring-npm/package-lock-json.md': [
        '/files/package-lock.json',
        '/files/package-lock.json.html',
    ],
    'configuring-npm/package-locks.md': [
        '/files/package-locks',
        '/files/package-locks.html',
    ],
    'configuring-npm/shrinkwrap-json.md': [
        '/files/shrinkwrap.json',
        '/files/shrinkwrap.json.html',
    ],
    'using-npm/index.mdx': [
        'cli-documentation/misc',
        'cli-documentation/using-npm',
        '/misc/index.html',
    ],
    'using-npm/removal.md': [
        '/misc/removing-npm',
        '/misc/removing-npm.html',
    ],
    'using-npm/scope.md': [
        '/using-npm/npm-scope',
    ],
};

const pagesForVersion = { }

config.forEach((version) => {
    pagesForVersion[version.id] = copyDocs(version);
});

updateNav(config);
ensurePagesLinked(config);

function updateNav(config) {
    const nav = yaml.parse(fs.readFileSync(baseNavFile, 'utf8'));
    const variants = new Array();

    config.forEach((version) => {
        variants.push(readNavForVersion(version));
    });

    nav.push({
        "title": cliTitle,
        "shortName": "CLI",
        "url": cliUrl,
        "variants": variants
    });

    const output = '# This file is automatically generated.  Do not edit.\n' +
        '# For registry content, edit `src/nav-base.yml in this repository.\n' +
        '# For CLI content, edit `docs/nav.yml` in https://github.com/npm/cli.\n' +
        '\n' +
        yaml.stringify(nav);

    fs.writeFileSync(outputNavFile, output);
}

function readNavForVersion(config) {
    const navInputFile = path.join(inputPath, config.id, cliNavFile);
    const children = yaml.parse(fs.readFileSync(navInputFile, 'utf8'));

    rewriteUrls(config, children);

    return {
        "title": config.title,
        "shortName": config.id,
        "url": `${cliUrl}/${config.id}`,
        "default": config.default ? true : false,
        "children": children
    };
}

function rewriteUrls(config, nodes) {
    nodes.forEach((n) => {
        const path = n.url.startsWith('/') ? n.url.substring(1) : n.url;
        const data = translate(config, { path: path });

        n.url = `${cliUrl}/${config.id}/${data.path}`;

        if (n.children) {
            rewriteUrls(config, n.children);
        }
    });
}

function translate(config, data) {
    const translation = translations[data.path] ?  translations[data.path] : { };
    let matches;

    if (!data.frontmatter) {
        data.frontmatter = { };
    }

    if (data.path.match(/^index(?:\.md(x)?)?/)) {
        if (config.default && data.frontmatter) {
            data.frontmatter['redirect_from'] = [
                `/cli`,
            ];
        }
    }

    else if ((matches = data.path.match(/(?:(.*)\/)index(?:\.md(x)?)?$/))) {
        if (config.default && data.frontmatter) {
            const section = matches[1];

            data.frontmatter['redirect_from'] = [
                `${section}`,
                `/cli/${section}`,
            ];
        }
    }

    else if (data.path.match(/^commands\/npm(\.md(x)?)?$/)) {
        if (config.default && data.frontmatter) {
            data.frontmatter['redirect_from'] = [
                `/cli/npm`,
                `/cli/npm.html`,
                `/cli/commands/npm`,
                `/cli-commands/npm`,
                `/cli-commands/npm.html`,
            ];
        }
    }

    else if ((matches = data.path.match(/^commands\/npm-(.*?)(\.md(?:x)?)?$/)) != null) {
        const command = matches[1];
        const extension = matches[2] ? matches[2] : '';

        if (config.default && data.frontmatter) {
            data.frontmatter['redirect_from'] = [
                `/cli/${command}`,
                `/cli/${command}.html`,
                `/cli/commands/${command}`,
                `/cli-commands/${command}`,
                `/cli-commands/${command}.html`,
                `/cli-commands/npm-${command}`,
            ];
        }
    }

    else if ((matches = data.path.match(/^(configuring-npm)\/(.*?)(\.md(?:x)?)?$/)) != null) {
        const path = matches[1];
        const page = matches[2];
        const extension = matches[3] ? matches[3] : '';

        if (config.default && data.frontmatter) {
            data.frontmatter['redirect_from'] = [
                `/${path}/${page}`,
                `/${path}/${page}.html`,
            ];
        }
    }

    else if ((matches = data.path.match(/^(using-npm)\/(.*?)(\.md(?:x)?)?$/)) != null) {
        const path = matches[1];
        const page = matches[2];
        const extension = matches[3] ? matches[3] : '';

        if (config.default && data.frontmatter) {
            data.frontmatter['redirect_from'] = [
                `/${path}/${page}`,
                `/${path}/${page}.html`,
                `/misc/${page}`,
                `/misc/${page}.html`,
            ];
        }
    }

    if (redirects[data.path] && config.default) {
        if (!data.frontmatter['redirect_from']) {
            data.frontmatter['redirect_from'] = { }
        }

        Array.prototype.push.apply(data.frontmatter['redirect_from'], redirects[data.path]);
    }

    if (data.frontmatter) {
        data.frontmatter['github_repo'] = `${githubRepo}`;
        data.frontmatter['github_branch'] = `${config.branch}`;
        data.frontmatter['github_path'] = `${cliContentPath}/${data.path}`;
    }

    if (data.frontmatter && translation.frontmatter) {
        for (let name of Object.keys(translation.frontmatter)) {
            data.frontmatter[name] = translation.frontmatter[name];
        }
    }

    if ((data.mdx || !data.contents) && translation.mdx) {
        data.mdx = translation.mdx;
    }
    else if (data.mdx) {
        function replacer(matches, p1, p2) {
            return `[${p1}](/cli/${config.id}/${p2})`;
        }

        data.mdx = data.mdx.replace(/@VERSION@/g, config.version)
            .replace(/\[([^\]]+)\]\(\/(commands\/[^)]+)\)/g, replacer)
            .replace(/\[([^\]]+)\]\(\/(configuring-npm\/[^)]+)\)/g, replacer)
            .replace(/\[([^\]]+)\]\(\/(using-npm\/[^)]+)\)/g, replacer);
    }

    return data;
}

function ensurePagesLinked(config) {
    const nav = yaml.parse(fs.readFileSync(outputNavFile, 'utf8'));
    let pages = { }
    let success = true

    Object.values(pagesForVersion).forEach((p) => {
        p.forEach((page) => {
            const file = path.join(path.sep, page).replace(/\.md$/, '');
            pages[file] = true;
        })
    })

    // identify nav items that aren't pages
    walkNavigation(nav, (n) => {
        if (!pages[n.url]) {
            console.log(`warning: ${n.url} included in navigation but does not exist`);
            success = false;
        }
    });

    // identify pages that aren't listed in the nav
    walkNavigation(nav, (n) => { delete pages[n.url] });

    Object.keys(pages).filter(p => !p.match("^(.*\/)?index\.md(x)?$")).forEach((page) => {
        console.log(`warning: ${page} is not included in navigation`);
        success = false;
    });

    return success;
}

function walkNavigation(nodes, fn) {
    nodes.forEach((n) => {
        if (!n.children && !n.variants && n.url.startsWith('/cli/')) {
            fn(n);
        }

        if (n.variants) {
            walkNavigation(n.variants, fn);
        }

        if (n.children) {
            walkNavigation(n.children, fn);
        }
    })
}

function copyDocs(config, relativedir) {
    const contentRoot = path.join(inputPath, config.id, cliContentPath);
    const dirPath = relativedir ? path.join(contentRoot, relativedir) : contentRoot;

    let paths = [ ]

    const children = fs.readdirSync(dirPath);

    if (!children.includes("index.md") && !children.includes("index.mdx")) {
        children.push("index.mdx");
    }

    children.forEach((fn) => {
        const relativechild = relativedir ? path.join(relativedir, fn) : fn;
        const childpath = path.join(contentRoot, relativechild);
        const exists = fs.existsSync(childpath);

        if (exists && fs.lstatSync(childpath).isDirectory()) {
            const childpaths = copyDocs(config, relativechild);
            paths = paths.concat(childpaths);
        }
        else {
            const contents = exists ? fs.readFileSync(childpath).toString() : null;
            const components = contents ? contents.match(/^---\n(.*)\n---\n(.*)/s) : null;
            let output;

            let filedata = {
                'path': relativechild,
                'contents': contents,
                'frontmatter': components ? yaml.parse(components[1]) : null,
                'mdx': components ? components[2] : null
            };

            filedata = translate(config, filedata);

            if (filedata) {
                output = "---\n" + yaml.stringify(filedata.frontmatter) + "---\n" + filedata.mdx;
            } else {
                output = contents;
            }

            const filePath = path.join('cli', config.id, filedata.path);
            const outputFilePath = path.join(outputPath, filePath);
            mkdirp.sync(path.dirname(outputFilePath));
            fs.writeFileSync(outputFilePath, output);

            paths.push(filePath)
        }
    });

    return paths;
}
