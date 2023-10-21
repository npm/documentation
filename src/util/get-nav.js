import {withPrefix} from 'gatsby'
import navItems from '../../content/nav.yml'

export const getItemBreadcrumbs = (path, props = {}) => {
  let hierarchy = getItemHierarchy(path)

  if (!hierarchy) {
    return []
  }

  if (props.hideVariants) {
    const root = getVariantRoot(path)
    const vp = getVariantAndPage(root, path)
    hierarchy = hierarchy.filter(item => (vp ? item.shortName !== vp.variant : true))
  }

  return hierarchy
}

export const getLocation = path => {
  const pathPrefix = withPrefix('/')

  if (!pathPrefix || pathPrefix === '/') {
    return path
  }

  const match = new RegExp(`^${pathPrefix}`)
  return path.replace(match, '/')
}

export const getPath = path => {
  while (path && path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }

  return path
}

export const getVariantRoot = path => {
  path = getPath(path)

  return findItem(item => {
    if (item.variants && path.startsWith(`${item.url}/`)) {
      return item.url
    }

    return null
  })
}

export const findItem = (fn, items = navItems) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    let result = fn(item)

    if (!result && item.children) {
      result = findItem(fn, item.children)
    }

    if (result) {
      return result
    }
  }

  return null
}

export const getItemHierarchy = (path, items = navItems) => {
  if (!path) {
    return null
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (getPath(item.url) === getPath(path)) {
      return [item]
    }

    const children = item.variants ? item.variants : item.children

    if (children) {
      const hierarchy = getItemHierarchy(path, children)

      if (hierarchy) {
        return [item, ...hierarchy]
      }
    }
  }

  return null
}

export const getItem = (path, items = navItems) => {
  if (!path) {
    return {url: '/', children: items}
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (getPath(item.url) === getPath(path)) {
      return item
    }

    const children = item.variants ? item.variants : item.children

    if (children) {
      const child = getItem(path, children)

      if (child) {
        return child
      }
    }
  }

  return null
}

export const isPathForItem = (path, item) => {
  return getPath(item.url) === getPath(path)
}

export const isChildItem = (path, items = navItems) => {
  if (!path) {
    return false
  }

  return findItem(item => (isPathForItem(path, item) ? item : null), items) != null
}

export const getHierarchy = (root, props = {}) => {
  let children

  if (!root) {
    children = navItems
  } else if (root.variants && props.hideVariants === true) {
    const variant = getCurrentOrDefaultVariant(root, props.path)
    children = variant.children
  } else if (root.variants) {
    children = root.variants
  } else {
    children = root.children
  }

  return children && props.hideVariants === true ? hideVariantsForItems(children, props.path) : children
}

export const hideVariantsForItems = (items, path) => {
  if (!items) {
    return null
  }

  const updated = []

  for (const item of items) {
    if (item.variants) {
      updated.push({
        ...item,
        url: getCurrentOrDefaultVariant(item, path).url,
      })
    } else {
      updated.push(item)
    }
  }

  return updated
}

export const getCurrentOrDefaultVariant = (root, path) => {
  return getCurrentVariant(root, path) || getDefaultVariant(root)
}

export const getCurrentVariant = (root, path) => {
  for (const v of root.variants) {
    if (isActiveItem(path, v)) {
      return v
    }
  }

  return null
}

export const getDefaultVariant = root => {
  for (const v of root.variants) {
    if (v.default) {
      return v
    }
  }

  return root.variants[0]
}

export const getVariantAndPage = (root, path) => {
  if (!root || !path.startsWith(`${root}/`)) {
    return null
  }

  path = path.substring(root.length + 1)

  const match = /^([^/]+)(?:\/(.*))?/.exec(path)

  if (!match) {
    return null
  }

  return {variant: match[1], page: match[2]}
}

export const didVariantChange = (oldPath, newPath) => {
  if (!oldPath || !newPath || oldPath === newPath) {
    return false
  }

  const oldVariant = getVariantAndPage(getVariantRoot(oldPath), getPath(oldPath))?.variant
  if (!oldVariant) {
    return false
  }

  return oldVariant !== getVariantAndPage(getVariantRoot(newPath), getPath(newPath))?.variant
}

export const getVariantsForPage = (root, page) => {
  const pages = []
  const rootItem = findItem(item => (getPath(item.url) === getPath(root) ? item : null))

  if (rootItem && rootItem.variants) {
    for (const variant of rootItem.variants) {
      if (!variant.children) {
        continue
      }

      const vp = getVariantAndPage(root, variant.url)
      const variantPage =
        vp.page === page
          ? variant
          : findItem(item => {
              const itemVp = getVariantAndPage(root, item.url)
              return itemVp?.page === page ? item : null
            }, variant.children)

      if (!variantPage) {
        continue
      }

      pages.push({variant, page: variantPage})
    }
  }

  return pages
}

export const isActiveItem = (currentPath, linkItem) => {
  return (
    isPathForItem(currentPath, linkItem) ||
    (linkItem.children && isChildItem(currentPath, linkItem.children)) ||
    (linkItem.variants && isChildItem(currentPath, linkItem.variants))
  )
}

export const isActiveUrl = (currentPath, linkPath) => {
  const linkItem = getItem(linkPath)
  return linkItem ? isActiveItem(currentPath, linkItem) : false
}
