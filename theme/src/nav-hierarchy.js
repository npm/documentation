import navItems from './nav.yml'
import { withPrefix } from 'gatsby'

export default {
  getLocation (path) {
    const pathPrefix = withPrefix('/')

    if (!pathPrefix || pathPrefix === '/') {
      return path
    }

    const match = new RegExp(`^${pathPrefix}`)
    return path.replace(match, '/')
  },

  getPath (path) {
    while (path && path.endsWith('/')) {
      path = path.substring(0, path.length - 1)
    }

    return path
  },

  getVariantRoot (path) {
    path = this.getPath(path)

    return this.findItem((item) => {
      if (item.variants && path.startsWith(item.url + '/')) {
        return item.url
      }

      return null
    })
  },

  findItem (fn, items = navItems) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      let result = fn(item)

      if (!result && item.children) {
        result = this.findItem(fn, item.children)
      }

      if (result) {
        return result
      }
    }

    return null
  },

  getItemHierarchy (path, items = navItems) {
    if (!path) {
      return null
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      if (this.getPath(item.url) === this.getPath(path)) {
        return [item]
      }

      const children = item.variants ? item.variants : item.children

      if (children) {
        const hierarchy = this.getItemHierarchy(path, children)

        if (hierarchy) {
          return [item, ...hierarchy]
        }
      }
    }

    return null
  },

  getItem (path, items = navItems) {
    if (!path) {
      return { url: '/', children: items }
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i]

      if (this.getPath(item.url) === this.getPath(path)) {
        return item
      }

      const children = item.variants ? item.variants : item.children

      if (children) {
        const child = this.getItem(path, children)

        if (child) {
          return child
        }
      }
    }

    return null
  },

  isPathForItem (path, item) {
    return (this.getPath(item.url) === this.getPath(path))
  },

  isChildItem (path, items = navItems) {
    if (!path) {
      return false
    }

    return (this.findItem((item) => this.isPathForItem(path, item) ? item : null, items) != null)
  },

  getHierarchy (root, props = { }) {
    let children

    if (!root) {
      children = navItems
    } else if (root.variants && props.hideVariants === true) {
      const variant = this.getCurrentOrDefaultVariant(root, props.path)
      children = variant.children
    } else if (root.variants) {
      children = root.variants
    } else {
      children = root.children
    }

    if (children && props.hideVariants === true) {
      children = this.hideVariantsForItems(children, props)
    }

    return children
  },

  hideVariantsForItems (items, props) {
    if (!items) {
      return null
    }

    const updated = []

    for (const item of items) {
      if (item.variants) {
        const cloned = { }
        Object.assign(cloned, item)

        const variant = this.getCurrentOrDefaultVariant(item, props.path)

        cloned.url = variant.url

        updated.push(cloned)
      } else {
        updated.push(item)
      }
    }

    return updated
  },

  getCurrentOrDefaultVariant (root, path) {
    let variant = path ? this.getCurrentVariant(root, path) : null

    if (!variant) {
      variant = this.getDefaultVariant(root)
    }

    return variant
  },

  getCurrentVariant (root, path) {
    for (const v of root.variants) {
      if (this.isActiveItem(path, v)) {
        return v
      }
    }

    return null
  },

  getDefaultVariant (root) {
    for (const v of root.variants) {
      if (v.default) {
        return v
      }
    }

    return root.variants[0]
  },

  getVariantAndPage (root, path) {
    if (!path.startsWith(root + '/')) {
      return null
    }

    path = path.substring(root.length + 1)

    const match = /^([^/]+)(?:\/(.*))?/.exec(path)

    if (!match) {
      return null
    }

    return { variant: match[1], page: match[2] }
  },

  getVariantsForPage (root, page) {
    const pages = []
    const rootItem = this.findItem((item) => this.getPath(item.url) === this.getPath(root) ? item : null)

    if (rootItem && rootItem.variants) {
      rootItem.variants.forEach((variant) => {
        if (!variant.children) {
          return
        }

        const vp = this.getVariantAndPage(root, variant.url)
        let variantPage

        if (vp.page === page) {
          variantPage = variant
        } else {
          variantPage = this.findItem((item) => {
            const vp = this.getVariantAndPage(root, item.url)
            return (vp && vp.page === page) ? item : null
          }, variant.children)
        }

        if (!variantPage) {
          return
        }

        pages.push({ variant: variant, page: variantPage })
      })
    }

    return pages
  },

  isActiveItem (currentPath, linkItem) {
    return (this.isPathForItem(currentPath, linkItem) ||
                (linkItem.children && this.isChildItem(currentPath, linkItem.children)) ||
                (linkItem.variants && this.isChildItem(currentPath, linkItem.variants)))
  },

  isActiveUrl (currentPath, linkPath) {
    const linkItem = this.getItem(linkPath)
    return linkItem ? this.isActiveItem(currentPath, linkItem) : false
  },
}
