const { posix: { join } } = require('path')

// An object to generate redirects for a given path.
// The key is a glob path that is matched by minimatch,
// and the value is a function that is passed a parsed
// path with { section, page, release }.
//
// Return an absolute path to bypass the normal /cli/
// folder prefix to the redirect path. These will only
// be applied for the default release or if an object
// with `default: true` is also returned.
//
// The order of the keys is important because the result of
// one redirect can generate other redirects if they match
// one of the remaining globs. So keys should be ordered
// from the least specific -> most specific. Note that this
// order is reversed when actually parsing the object and
// running the code so it works properly.
//
// For example: path -> configuring-npm/package-lock-json
// This will first match: configuring-npm/*
// which will generate the redirects files/package-lock-json
// Later this will match: **/*-json*
// So both redirects from: configuring-npm/package-lock.json
// and files/package-lock.json will also be created.
//
// Note that all redirects are deduped later so it is safe
// if a path creates multiple idential redirects. Gatsby
// will also warn (but not create them) if multiple pages
// redirect to the same or already exsiting paths.

module.exports = {
  index: () => ['.'],
  '*/!(index)': ({ section, page }) => [
    join(section, page),
    join('/', section, page),
  ],
  '*/index': ({ section, page }) => [
    join(section),
    join('/', section),
    join(section, page),
    join('/', section, page),
  ],

  // any page with `-json` -> `.json`
  '**/*-json*': ({ section, page }) => [
    join(section, page.replace(/-json/g, '.json')),
  ],

  // commands
  'commands/!(index)': ({ page }) => [
    page,
  ],
  'commands/index': () => [
    '/cli-documentation/cli',
  ],
  'commands/*': ({ page }) => [
    join('cli-commands', page),
    join('/', 'cli-commands', page),
  ],
  'commands/npm-*': ({ section, page }) => [
    join(section, page.replace(/^npm-/, '')),
  ],

  // configuring npm
  'configuring-npm/*': ({ page }) => [
    join('files', page),
    join('/', 'files', page),
  ],
  'configuring-npm/package-locks': ({ section, page, release }) => [
    // A special case for a path that was deleted in v7, but we still
    // want the old v6 default url to resolve.
    { path: join('/', section, page), default: release.id === 'v6' },
    { path: join(section, page), default: release.id === 'v6' },
  ],

  // using npm
  'using-npm/*': ({ page }) => [
    join('misc', page),
    join('/', 'misc', page),
  ],
  'using-npm/removal': ({ section }) => [
    join(section, 'removing-npm'),
  ],
  'using-npm/scope': ({ section }) => [
    join(section, 'npm-scope'),
  ],
}
