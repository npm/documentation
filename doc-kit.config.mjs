import {readFileSync} from 'node:fs'
import {dirname, join, relative} from 'node:path'
import {fileURLToPath} from 'node:url'
import {parse as parseYaml} from 'yaml'

const ROOT = import.meta.dirname
const CONTENT = join(ROOT, 'content')
const THEME = join(ROOT, 'src', 'theme')

// Where doc-kit's own `html` theme lives: a few of its modules are replaced
// below so that the site is rendered by this repository's theme instead.
const DOC_KIT_HTML = dirname(fileURLToPath(import.meta.resolve('@doc-kit/generator-react/html')))

const site = {
  title: 'npm Docs',
  shortName: 'npm',
  description: 'Documentation for the npm registry, website, and command-line interface',
  imageUrl: 'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
  repositoryUrl: 'https://github.com/npm/documentation',
}

const readYaml = file => parseYaml(readFileSync(join(CONTENT, file), 'utf8'))

const theme = file => join(THEME, file)

/**
 * doc-kit's client bundle registers its own interactive components, which
 * this site never renders. These resolve them to an empty component, so
 * that neither their code nor their styles end up in the site. The relative
 * paths are how doc-kit's island loader imports them.
 */
const stubbedDocKitComponents = Object.fromEntries(
  [
    '#theme/Sidebar',
    '../components/Banner',
    '../components/ThemeToggle.jsx',
    '../components/SearchBox',
    join(DOC_KIT_HTML, 'ui', 'components', 'CodeTabs'),
    join(DOC_KIT_HTML, 'ui', 'components', 'DocumentationIndex'),
    '@node-core/ui-components/MDX/Tooltip',
    '@node-core/ui-components/Common/ChangeHistory',
    '@node-core/ui-components/Common/AlertBox',
    '@node-core/ui-components/Common/Badge',
    '@node-core/ui-components/Common/DataTag',
    '@node-core/ui-components/Containers/FunctionSignature',
  ].map(specifier => [specifier, theme('noop.jsx')]),
)

// The components content can use, by tag name. Interactive ones are also
// what doc-kit hydrates on the client ("islands").
const components = {
  Note: theme('mdx/note.jsx'),
  Screenshot: theme('mdx/screenshot.jsx'),
  YouTube: theme('mdx/youtube.jsx'),
  Index: theme('mdx/nav-hierarchy.jsx'),
  Shared: theme('mdx/shared.jsx'),
  TrustedPublisherSwitcher: theme('mdx/trusted-publisher-switcher.jsx'),
  TrustedPublisherOption: theme('mdx/trusted-publisher-option.jsx'),
  TrustedPublisherSwitcherIsland: theme('mdx/trusted-publisher-switcher-island.jsx'),
  ClipboardCopy: theme('mdx/clipboard-copy.jsx'),
  Header: theme('components/header.jsx'),
  SiteSidebar: theme('components/sidebar.jsx'),
  VariantSelect: theme('components/variant-select.jsx'),
  TableOfContentsList: theme('components/table-of-contents-list.jsx'),
}

/** @type {import('@doc-kit/core/utils/configuration/types').Configuration} */
const config = {
  // The site's own generators run between doc-kit's stages and deliver
  // their output through the `html` generator.
  target: [
    join(ROOT, 'src', 'generators', 'npm-ast', 'index.mjs'),
    join(ROOT, 'src', 'generators', 'npm', 'index.mjs'),
  ],

  global: {
    project: site.title,
    site,
    input: [join(CONTENT, '**', '*.mdx')],
    // Leave out part of the content, to cut down on build times locally:
    //   CONTENT_IGNORE=cli/v6,cli/v7,cli/v8,cli/v9 npm run develop
    ignore: (process.env.CONTENT_IGNORE ?? '')
      .split(',')
      .filter(Boolean)
      .map(dir => join(CONTENT, dir, '**')),
    output: join(ROOT, 'public'),
    repository: 'npm/documentation',
    baseURL: 'https://docs.npmjs.com',
    minify: true,
    // Everything in `static/` is served from the root of the site.
    pathsToCopy: [{[join(ROOT, 'static')]: '.'}],
  },

  'jsx-ast': {
    // `content/404.mdx` is the not found page.
    generateNotFoundPage: false,
  },

  npm: {
    contentDir: relative(ROOT, CONTENT),
    branch: 'main',
  },

  html: {
    title: site.title,
    templatePath: theme('template.html'),
    generateAllPage: false,

    imports: {
      ...stubbedDocKitComponents,
      ...Object.fromEntries(Object.entries(components).map(([name, file]) => [`#theme/${name}`, file])),

      '#theme/Layout': theme('layout.jsx'),

      // doc-kit renders every fenced code block and blockquote with these
      // two components; the site's own take the look of the previous site.
      [join(DOC_KIT_HTML, 'ui', 'components', 'CodeBox')]: theme('mdx/code-box.jsx'),
      '@node-core/ui-components/Common/Blockquote': theme('mdx/blockquote.jsx'),

      // doc-kit's stylesheet is replaced wholesale by the site's.
      [join(DOC_KIT_HTML, 'ui', 'index.css')]: theme('styles/index.css'),
    },

    // Build-time data the theme imports.
    virtualImports: {
      '#theme/site': `export default ${JSON.stringify(site)};`,
      '#theme/nav': `export default ${JSON.stringify(readYaml('nav.yml'))};`,
      '#theme/header-nav': `export default ${JSON.stringify(readYaml('header-nav.yml'))};`,
    },

    components: Object.fromEntries(Object.keys(components).map(name => [name, `#theme/${name}`])),
  },
}

export default config
