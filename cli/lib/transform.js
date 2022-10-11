const parseFm = require('front-matter')
const Minipass = require('minipass')
const yaml = require('yaml')
const minimatch = require('minimatch')
const { sep, join, posix, isAbsolute } = require('path')
const gh = require('./gh')
const rawRedirects = require('./redirects')

const getPathParts = (path) => {
  const abs = isAbsolute(path)
  const paths = path.replace(/\.mdx?$/, '').split(sep)

  const pathId = posix.join(abs ? '/' : '', ...paths)
  const page = posix.basename(pathId)
  const section = posix.dirname(pathId)

  return {
    path: pathId,
    page,
    section: section === '.' ? '' : section,
  }
}

const getRedirects = ({ path, release }) => {
  const redirects = [getPathParts(path)]
  const [pagePath] = redirects
  const canonical = posix.join(
    release.url,
    pagePath.section,
    pagePath.page === 'index' ? '' : pagePath.page
  )

  for (const [k, v] of Object.entries(rawRedirects).reverse()) {
    const pageRedirects = redirects.flatMap(redirect => {
      if (minimatch(redirect.path, k)) {
        return v({ ...getPathParts(redirect.path), release }).map(p => ({
          ...redirect,
          ...typeof p === 'object' ? p : { path: p },
        }))
      }
    })
    redirects.push(...pageRedirects.filter(Boolean))
  }

  const prefixRedirects = redirects
    .flatMap(redirect => {
      const useDefault = redirect.default || release.default
      if (isAbsolute(redirect.path)) {
        return useDefault ? redirect.path : null
      } else {
        return release.urlPrefixes.flatMap(p => [
          posix.join('/', p, release.id, redirect.path),
          useDefault ? posix.join('/', p, redirect.path) : null,
        ])
      }
    })
    .filter(Boolean)
    .filter(r => r !== canonical)

  return [...new Set(prefixRedirects)]
    .sort((a, b) => a.localeCompare(b, 'en'))
}

const transform = (data, { release, path, frontmatter }) => {
  let { attributes, body } = parseFm(data.toString())

  /* istanbul ignore next */
  if (!attributes.redirect_from) {
    attributes.redirect_from = []
  }
  attributes.redirect_from.push(...getRedirects({ path, release }))

  const ghFrontmatter = {
    github_repo: gh.nwo,
    github_branch: release.branch,
    github_path: join(release.src, path).split(sep).join(posix.sep),
  }

  const order = [
    'title',
    'shortName',
    'section',
    'description',
    'github_repo',
    'github_branch',
    'github_path',
    'redirect_from',
  ]

  const sortRedirects = (a, b) => a.localeCompare(b, 'en')

  attributes = Object.fromEntries(
    Object.entries({ ...attributes, ...ghFrontmatter, ...frontmatter })
      .filter(([, v]) => (Array.isArray(v) ? v.length : true))
      .map(([k, v]) => (Array.isArray(v) ? [k, v.sort(sortRedirects)] : [k, v]))
      .sort(([a], [b]) => {
        /* istanbul ignore next */
        const aIndex = order.includes(a) ? order.indexOf(a) : order.length
        /* istanbul ignore next */
        const bIndex = order.includes(b) ? order.indexOf(b) : order.length
        return aIndex - bIndex
      })
  )

  body = body
    // some legacy versions of the docs did not get this replaced
    // in the source so we need to replace it here
    .replace(/@VERSION@/g, release.version)
    // also replace all internal markdown links with links to this
    // specific version
    .replace(
      /\[([^\]]+)\]\(\/((?:commands|configuring-npm|using-npm)\/[^)]+)\)/g,
      (_, p1, p2) => `[${p1}](${release.url}/${p2})`
    )

  return `---\n${yaml.stringify(attributes).trim()}\n---\n\n${body}`
}

// copied from minipass-collect. collects all chunks into a single
// buffer which is then transformed before a final write event
class Transform extends Minipass {
  #data = []
  #length = 0
  #opts = {}

  constructor (transformOpts) {
    super({ encoding: 'utf-8' })
    this.#opts = transformOpts
  }

  write (c) {
    this.#data.push(c)
    this.#length += c.length
    return true
  }

  end () {
    super.write(transform(Buffer.concat(this.#data, this.#length), this.#opts))
    return super.end()
  }
}

module.exports = Transform
module.exports.sync = transform
