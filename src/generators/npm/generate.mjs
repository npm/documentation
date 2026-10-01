import {mkdir, writeFile} from 'node:fs/promises'
import {join, posix} from 'node:path'
import getConfig from '@doc-kit/core/utils/configuration/index.mjs'
import logger from '@doc-kit/core/logger/index.mjs'
import {visit} from 'unist-util-visit'
import {MASKED_HEADING} from '../npm-ast/generate.mjs'
import {getCliRelease, getPageUrl, toApi, toOutputPath} from './utils/paths.mjs'
import {buildTableOfContents} from './utils/toc.mjs'
import {collectRedirects, writeRedirects} from './utils/redirects.mjs'
import {createContributorsFetcher, getEditUrl, getRepo} from './utils/contributors.mjs'
import {buildSearchIndex, NO_CLI} from './utils/search.mjs'
import {toSearchText} from './utils/text.mjs'

const SEARCH_INDEX = 'search-index.json'

const npmLogger = logger.child('npm')

const escapeHTML = text =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

/**
 * Restores the headings the `npm-ast` generator masked, now that the page is
 * one entry.
 */
const restoreHeadings = tree => {
  visit(tree, MASKED_HEADING, node => {
    node.type = 'heading'
    node.data = {...node.data, name: node.data.text, depth: node.depth}
  })
}

/**
 * Builds one page from the entry the `metadata` stage produced for it. The
 * entry's frontmatter is already merged into it (`title`, `description`,
 * `redirect_from`, `edit_on_github`, `github_*`).
 */
export const buildPage = async (entry, config, fetchContributors) => {
  const sourcePath = entry.path
  const url = getPageUrl(sourcePath)
  const tree = entry.content

  entry.path = toOutputPath(url)
  entry.api = toApi(entry.path)
  entry.url = url
  entry.title ??= ''

  // What the document's <head> shows, ready to be written into the template.
  entry.head = {
    title: escapeHTML([...new Set([entry.title, config.site.title].filter(Boolean))].join(' | ')),
    description: escapeHTML(entry.description || config.site.description),
  }

  entry.tableOfContents = buildTableOfContents(tree, {headingType: MASKED_HEADING, title: entry.title})
  restoreHeadings(tree)

  // `edit_on_github: false` in the frontmatter leaves out the edit link and
  // the contributors; policy pages and some index pages use it.
  if (entry.edit_on_github !== false) {
    const file = posix.join(config.contentDir, `${sourcePath.replace(/^\/+/, '')}.mdx`)
    const repo = getRepo(file, entry, config)
    entry.editUrl = getEditUrl(repo)
    if (fetchContributors) {
      Object.assign(entry, await fetchContributors(repo))
    }
  }

  return entry
}

/**
 * @param {Array<import('@doc-kit/core/generators/metadata/types').MetadataEntry>} input
 */
export async function generate(input) {
  const config = getConfig('npm')

  // Every file is a single entry (the `npm-ast` generator saw to that), but be
  // strict about it: anything else means a heading slipped through.
  const seen = new Set()
  for (const entry of input) {
    if (seen.has(entry.path)) {
      throw new Error(`Expected one entry per page, got several for ${entry.path}`)
    }
    seen.add(entry.path)
  }

  const fetchContributors = config.contributors ? createContributorsFetcher({logger: npmLogger}) : null

  const pages = await Promise.all(input.map(entry => buildPage(entry, config, fetchContributors)))

  npmLogger.info(`Prepared ${pages.length} pages`)

  if (config.output) {
    await mkdir(config.output, {recursive: true})

    const redirects = collectRedirects(pages)
    await writeRedirects(redirects, config.output)
    npmLogger.info(`Wrote ${redirects.length} redirects`)

    const documents = pages.map(page => ({
      title: page.title,
      body: toSearchText(page.content),
      path: page.url,
      cli: getCliRelease(page.url) ?? NO_CLI,
    }))
    await writeFile(join(config.output, SEARCH_INDEX), JSON.stringify(buildSearchIndex(documents)))
    npmLogger.info(`Wrote the search index (${documents.length} documents)`)
  }

  return pages
}
