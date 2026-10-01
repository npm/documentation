import {posix} from 'node:path'

/**
 * The URL a content file is published at.
 *
 * For backwards compatibility the on-disk paths are not the URLs of the
 * site: intermediate directories are dropped from most pages, so
 * `content/getting-started/setting-up-your-npm-user-account/creating-a-strong-password.mdx`
 * is served at `/creating-a-strong-password`. Directory indexes, CLI pages
 * and policy pages keep their full path.
 *
 * @param {string} sourcePath - The file path relative to the content directory, without extension (e.g. `/about-npm/index`)
 * @returns {string} The URL, always starting with `/` and never ending with one (except `/` itself)
 */
export const getPageUrl = sourcePath => {
  const normalized = `/${sourcePath.replace(/\\/g, '/').replace(/^\/+/, '')}`
  const dir = posix.dirname(normalized).replace(/^\/+/, '')
  const name = posix.basename(normalized)

  if (name === 'index') {
    return dir ? `/${dir}` : '/'
  }

  if (dir === 'cli' || dir.startsWith('cli/') || dir.startsWith('policies')) {
    return `/${dir}/${name}`
  }

  return `/${name}`
}

/**
 * Where doc-kit writes a page, as the extensionless path it expects. Pages
 * are written as `<url>/index.html` so that `/<url>/` keeps working exactly
 * as it does today on GitHub Pages; the not found page must be `404.html`.
 *
 * @param {string} url
 */
export const toOutputPath = url => {
  if (url === '/') {
    return '/index'
  }
  if (url === '/404') {
    return '/404'
  }
  return `${url}/index`
}

/**
 * A unique, file system safe identifier for a page.
 *
 * @param {string} outputPath
 */
export const toApi = outputPath => outputPath.replace(/^\/+/, '').replace(/\//g, '__')

/**
 * The URL of the CLI release a page belongs to (`/cli/v11`), or `null`.
 *
 * @param {string} url
 */
export const getCliRelease = url => {
  const match = /^\/cli\/([^/]+)/.exec(url)
  return match ? `/cli/${match[1]}` : null
}
