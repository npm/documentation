/**
 * The shape of a search document. `cli` is the CLI release a page belongs to
 * (`/cli/v11`), or `-` for every other page, so that searching only looks at
 * one release of the CLI documentation at a time.
 */
export const SEARCH_SCHEMA = {
  title: 'string',
  body: 'string',
  path: 'string',
  cli: 'enum',
}

export const NO_CLI = '-'

/**
 * The searchable text of a page: every distinct word of it, once. Search
 * matches words, so this finds the same pages as the full text while being
 * a fraction of its size.
 *
 * @param {string} text
 */
export const toSearchBody = text => [...new Set(text.toLowerCase().split(/\s+/).filter(Boolean))].join(' ')

/**
 * Builds the search index of the site: the documents the search box loads on
 * demand and indexes in the browser.
 *
 * @param {Array<{ title: string, body: string, path: string, cli: string }>} documents
 */
export const buildSearchIndex = documents => ({
  documents: documents.map(document => ({...document, body: toSearchBody(document.body)})),
})
