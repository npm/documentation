import {mkdir, writeFile} from 'node:fs/promises'
import {dirname, join} from 'node:path'

const escapeHTML = text =>
  text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

/**
 * The HTML of a redirect page: a meta refresh plus a canonical link, which is
 * what the previous site generator wrote.
 *
 * @param {string} to - The absolute URL to redirect to
 */
export const redirectPage = to =>
  [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    `<link rel="canonical" href="${escapeHTML(to)}">`,
    `<meta http-equiv="refresh" content="0; URL='${escapeHTML(to)}'">`,
    '<meta name="robots" content="noindex">',
    '</head>',
    '<body>',
    `<p>Redirecting to <a href="${escapeHTML(to)}">${escapeHTML(to)}</a></p>`,
    '</body>',
    '</html>',
    '',
  ].join('\n')

/**
 * Normalizes a redirect source into an absolute URL without a trailing slash.
 *
 * @param {string} from
 */
const normalize = from => `/${from.replace(/^\/+/, '').replace(/\/+$/, '')}`

/**
 * The redirect pages to write for every page's `redirect_from` frontmatter.
 *
 * Each redirect is written as `<from>/index.html`; CLI pages, which used to
 * be published with an `.html` extension, also get `<from>.html`. Sources
 * that collide with a real page are skipped, as they were before.
 *
 * @param {Array<{ url: string, redirect_from?: string[] }>} pages
 * @returns {Array<{ file: string, to: string }>} Files relative to the output directory
 */
export const collectRedirects = pages => {
  const urls = new Set(pages.map(page => page.url))
  const files = new Map()

  for (const page of pages) {
    for (const source of page.redirect_from ?? []) {
      const from = normalize(source)

      if (from === page.url || urls.has(from)) {
        continue
      }

      const targets = [`${from.slice(1)}/index.html`]

      if (page.url.startsWith('/cli/') && !from.endsWith('/index')) {
        targets.push(`${from.slice(1)}.html`)
      }

      for (const file of targets) {
        if (!files.has(file)) {
          files.set(file, {file, to: page.url})
        }
      }
    }
  }

  return [...files.values()].sort((a, b) => a.file.localeCompare(b.file, 'en'))
}

/**
 * Writes the redirect pages into the output directory.
 *
 * @param {Array<{ file: string, to: string }>} redirects
 * @param {string} output
 */
export const writeRedirects = async (redirects, output) => {
  const dirs = new Set(redirects.map(({file}) => dirname(join(output, file))))

  await Promise.all([...dirs].map(dir => mkdir(dir, {recursive: true})))
  await Promise.all(redirects.map(({file, to}) => writeFile(join(output, file), redirectPage(to))))
}
