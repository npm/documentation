import React from 'react'
import {ActionList, ActionMenu, Box} from '@primer/react'
import NavHierarchy from '../util/nav-hierarchy'
import {useLocation} from '../layout'

const VariantItem = ({match, active}) => {
  const {variant, page} = match

  const handleClick = React.useCallback(
    event => {
      event.preventDefault()
      window.location.href = `${page.url}?v=true`
    },
    [page.url],
  )

  const handleKey = React.useCallback(
    event => {
      if (event.key === 'Enter') {
        window.location.href = `${page.url}?v=true`
      }
    },
    [page.url],
  )

  return (
    <ActionList.Item onKeyDown={handleKey} onClick={handleClick} id={variant.shortName} active={active}>
      {variant.title}
    </ActionList.Item>
  )
}

const VariantMenu = ({variants, path}) => {
  const [open, setOpen] = React.useState(false)

  const {selected, items} = variants.reduce(
    (acc, match, key) => {
      const active = match.page.url === path
      if (active) {
        acc.selected = match
      }
      acc.items.push({match, key, active})
      return acc
    },
    {selected: variants[0], items: []},
  )

  return (
    <>
      <p id="label-versions-list-item">Select CLI Version:</p>
      <ActionMenu open={open} onOpenChange={setOpen}>
        {/* Disabling to remove lint warnings. This property was added as "autofocus"
        in a previous accessibility audit which did not trigger the lint warning. */
        /* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <ActionMenu.Button autoFocus aria-describedby="label-versions-list-item">
          {selected.variant.title}
        </ActionMenu.Button>
        <ActionMenu.Overlay width="medium" onEscape={() => setOpen(false)}>
          <ActionList id="versions-list-item" aria-labelledby="label-versions-list-item">
            {items.map(item => (
              <VariantItem key={item.key} {...item} />
            ))}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  )
}

const VariantSelect = () => {
  const location = useLocation()
  const root = NavHierarchy.getVariantRoot(location.pathname)
  const path = NavHierarchy.getPath(location.pathname)
  const vp = NavHierarchy.getVariantAndPage(root, path)
  const variants = vp ? NavHierarchy.getVariantsForPage(root, vp.page) : []

  if (!variants.length) {
    return null
  }

  return (
    <Box css={{'margin-top': '25px'}}>
      <VariantMenu variantPages={variants} path={path} />
    </Box>
  )
}

export default VariantSelect
