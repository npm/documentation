import React from 'react'
import {ActionList, ActionMenu} from '@primer/react'
import NavHierarchy from '../util/nav-hierarchy'

// VariantSelect: allows a variant to be set up within a document hierarchy
//
// For example, given two paths `/docs/v1.0/foo` and `/docs/v2.0/foo`, the
// second folder acts as a variant.  If you use <VariantSelect root="/docs">
// then you'll get a selection for the different variants (v1.0, v2.0).

const VariantSelect = ({variantPages, path}) => {
  const [open, setOpen] = React.useState(false)
  const anchorClickHandler = React.useCallback((event, url) => {
    event.preventDefault()
    window.location.href = `${url}?v=true`
  }, [])

  const onItemEnterKey = React.useCallback((event, url) => {
    if (event.key === 'Enter') {
      window.location.href = `${url}?v=true`
    }
  }, [])

  let selectedItem = variantPages[0]
  const items = variantPages.map((match, index) => {
    let active = false
    if (match.page.url === path) {
      selectedItem = match
      active = true
    }
    return (
      <ActionList.Item
        onKeyDown={e => onItemEnterKey(e, match.page.url)}
        onClick={e => anchorClickHandler(e, match.page.url)}
        id={match.variant.shortName}
        key={index}
        active={active}
      >
        {match.variant.title}
      </ActionList.Item>
    )
  })

  return (
    <>
      <p id="label-versions-list-item">Select CLI Version:</p>
      <ActionMenu open={open} onOpenChange={setOpen}>
        {/* Disabling to remove lint warnings. This property was added as "autofocus"
        in a previous accessibility audit which did not trigger the lint warning. */
        /* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <ActionMenu.Button autoFocus aria-describedby="label-versions-list-item">
          {selectedItem.variant.title}
        </ActionMenu.Button>
        <ActionMenu.Overlay width="medium" onEscape={() => setOpen(false)}>
          <ActionList id="versions-list-item" aria-labelledby="label-versions-list-item">
            {items}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  )
}

const VariantSelectLocation = ({root, location}) => {
  const path = NavHierarchy.getPath(location.pathname)
  const vp = NavHierarchy.getVariantAndPage(root, path)
  const variantPages = vp ? NavHierarchy.getVariantsForPage(root, vp.page) : []

  if (!variantPages.length) {
    return null
  }

  return <VariantSelect variantPages={variantPages} path={path} />
}

export default VariantSelectLocation
