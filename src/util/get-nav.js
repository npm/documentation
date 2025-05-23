import navItems from '../../content/nav.yml'

/*
 *
 * Internal functions
 *
 */
const getPath = path => {
  while (path && path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }

  return path
}

const getCurrentVariant = (root, path) => {
  for (const v of root.variants) {
    if (isActiveItem(path, v)) {
      return v
    }
  }

  return null
}

const getDefaultVariant = root => {
  for (const v of root.variants) {
    if (v.default) {
      return v
    }
  }

  return root.variants[0]
}

const getVariantAndPage = (root, path) => {
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

const hideVariantsForItems = (items, path) => {
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

const getItemHierarchy = (path, items = navItems) => {
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

const isChildItem = (path, items = navItems) => {
  if (!path) {
    return false
  }

  return findItem(item => (isPathForItem(path, item) ? item : null), items) != null
}

const findItem = (fn, items = navItems) => {
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

const isActiveItem = (currentPath, linkItem) => {
  return (
    isPathForItem(currentPath, linkItem) ||
    (linkItem.children && isChildItem(currentPath, linkItem.children)) ||
    (linkItem.variants && isChildItem(currentPath, linkItem.variants))
  )
}

const getVariantsForPage = (root, page) => {
  const pages = []
  const rootItem = findItem(item => (getPath(item.url) === getPath(root) ? item : null))

  if (rootItem && rootItem.variants) {
    for (const variant of rootItem.variants) {
      if (!variant.children) {
        continue
      }

      const vp = getVariantPage(root, variant.url)
      const variantPage =
        vp === page
          ? variant
          : findItem(item => {
              const itemVp = getVariantPage(root, item.url)
              return itemVp === page ? item : null
            }, variant.children)

      if (!variantPage) {
        continue
      }

      pages.push({variant, page: variantPage})
    }
  }

  return pages
}

/*
 *
 * Export functions
 *
 */
export const getItemBreadcrumbs = (path, {hideVariants} = {}) => {
  let hierarchy = getItemHierarchy(path)

  if (!hierarchy) {
    return []
  }

  if (hideVariants) {
    const root = getVariantRoot(path)
    const variant = getVariant(root, path)
    hierarchy = hierarchy.filter(item => (variant ? item.shortName !== variant : true))
  }

  return hierarchy
}

export const getVariantRoot = (path, {stripTrailing = true} = {}) => {
  if (stripTrailing) {
    path = getPath(path)
  }

  return findItem(item => {
    if (item.variants && path.startsWith(`${item.url}/`)) {
      return item.url
    }

    return null
  })
}

export const getItem = (path, items = navItems) => {
  path = getPath(path)

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

export const getHierarchy = (root, path, {hideVariants} = {}) => {
  let children

  if (!root) {
    children = navItems
  } else if (root.variants && hideVariants === true) {
    children = getCurrentOrDefaultVariant(root, path).children
  } else if (root.variants) {
    children = root.variants
  } else {
    children = root.children
  }

  return children && hideVariants === true ? hideVariantsForItems(children, path) : children
}

export const getCurrentOrDefaultVariant = (root, path) => {
  let variant = path ? getCurrentVariant(root, path) : null

  if (!variant) {
    variant = getDefaultVariant(root)
  }

  return variant
}

export const getVariant = (root, path) => getVariantAndPage(root, path)?.variant ?? null

export const getVariantPage = (root, path) => getVariantAndPage(root, path)?.page ?? null

export const didVariantChange = (oldPath, newPath) => {
  if (!oldPath || !newPath || oldPath === newPath) {
    return false
  }

  const oldVariant = getVariant(getVariantRoot(oldPath), getPath(oldPath))
  if (!oldVariant) {
    return false
  }

  return oldVariant !== getVariant(getVariantRoot(newPath), getPath(newPath))
}

export const getVariantsForPath = path => {
  const root = getVariantRoot(path)
  const vPage = getVariantPage(root, path)
  return vPage ? getVariantsForPage(root, vPage) : []
}

export const isActiveUrl = (currentPath, linkPath) => {
  const linkItem = getItem(linkPath)
  return linkItem ? isActiveItem(currentPath, linkItem) : false
}
