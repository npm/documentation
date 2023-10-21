import React from 'react'
import {ActionList, ActionMenu, Box} from '@primer/react'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'
import Link from './link'

const VariantItem = ({title, shortName, url, active}) => (
  <ActionList.Item
    as={Link}
    to={url}
    id={shortName}
    active={active}
    sx={{
      ':hover': {textDecoration: 'none'},
    }}
  >
    {title}
  </ActionList.Item>
)

const useVariantFocus = path => {
  const anchorRef = React.useRef(null)
  const pathRef = React.useRef(null)

  React.useEffect(() => {
    const previousPath = pathRef.current
    pathRef.current = path

    if (getNav.didVariantChange(previousPath, path)) {
      const anchor = anchorRef.current
      const onBlur = () => {
        anchor.removeEventListener('blur', onBlur)
        anchor.focus()
      }
      anchor.addEventListener('blur', onBlur)
      return () => anchor.removeEventListener('blur', onBlur)
    }
  }, [path])

  return anchorRef
}

const VariantMenu = ({title, latest, current, prerelease, legacy, path}) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = useVariantFocus(path)
  const labelId = 'label-versions-list-item'

  return (
    <>
      <Box as="p" sx={{m: 0}} id={labelId}>
        Select CLI Version:
      </Box>
      <ActionMenu anchorRef={anchorRef} open={open} onOpenChange={setOpen}>
        <ActionMenu.Button aria-describedby={labelId}>{title}</ActionMenu.Button>
        <ActionMenu.Overlay width="auto" onEscape={() => setOpen(false)}>
          <ActionList aria-labelledby={labelId}>
            <ActionList.Group title="Current">
              <VariantItem {...latest} />
              {current && <VariantItem {...current} />}
              {prerelease && <VariantItem {...prerelease} />}
            </ActionList.Group>
            <ActionList.Group title="Legacy">
              {legacy.map(item => (
                <VariantItem key={item.title} {...item} />
              ))}
            </ActionList.Group>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </>
  )
}

const useVariants = () => {
  const {pathname: path} = usePage().location

  return React.useMemo(() => {
    const variantPages = getNav.getVariantsForPath(path)

    if (!variantPages.length) {
      return null
    }

    const result = {path, latest: null, current: null, prerelease: null, legacy: []}

    for (const {variant, page} of variantPages) {
      const item = {...variant, url: page.url, active: page.url === path}
      let typeDesc = ''
      switch (variant.type) {
        case 'latest':
          result.latest = item
          typeDesc = ' (Latest)'
          break
        case 'current':
          result.current = item
          typeDesc = ' (Current)'
          break
        case 'prerelease':
          result.prerelease = item
          typeDesc = ' (Prerelease)'
          break
        default:
          result.legacy.push(item)
          typeDesc = ' (Legacy)'
      }
      if (item.active) {
        result.title = `${item.title}${typeDesc}`
      }
    }

    result.legacy.sort((a, b) => parseInt(b.shortName.slice(1)) - parseInt(a.shortName.slice(1)))

    return result
  }, [path])
}

const VariantSelect = () => {
  const variants = useVariants()
  return variants ? (
    <Box sx={{mt: 2, mb: 3}}>
      <VariantMenu {...variants} />
    </Box>
  ) : null
}

export default VariantSelect
