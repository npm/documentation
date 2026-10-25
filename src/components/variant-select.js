import React from 'react'
import {ActionList, ActionMenu} from '@primer/react'
import * as getNav from '../util/get-nav'
import usePage from '../hooks/use-page'
import {LinkNoUnderline} from './link'
import useLocationChange from '../hooks/use-location-change'
import styled from 'styled-components'

import * as styles from './variant-select.module.css'

const StyledOverlay = styled(ActionMenu.Overlay)`
  background-color: var(--bgColor-default, #ffffff) !important;
  border-color: var(--borderColor-default, #d0d7de);
  border-width: 1px;
  border-style: solid;
  box-shadow: var(--shadow-resting-medium, 0 3px 6px rgba(140, 149, 159, 0.15));
`

const VariantItem = ({title, shortName, url, active}) => {
  return (
    <ActionList.LinkItem
      as={LinkNoUnderline}
      to={url}
      state={{scrollUpdate: false}}
      id={shortName}
      active={active}
      className={styles.variantItem}
    >
      {title}
    </ActionList.LinkItem>
  )
}

const isPlainActivation = event =>
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey &&
  (event.type === 'click' ? event.button === 0 : event.key === 'Enter')

const VariantMenu = ({title, latest, current, prerelease, legacy}) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const selectingRef = React.useRef(false)
  const focusAnchorRef = React.useRef(false)
  const labelId = 'label-versions-list-item'
  const locationChange = useLocationChange()

  React.useEffect(() => {
    selectingRef.current = false
    if (locationChange.change && getNav.didVariantChange(locationChange.previous, locationChange.current)) {
      focusAnchorRef.current = true
      setOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- granular deps are intentional; locationChange.current is a URL string, not a ref
  }, [locationChange.change, locationChange.current, locationChange.previous])

  React.useEffect(() => {
    if (!open && focusAnchorRef.current) {
      focusAnchorRef.current = false
      anchorRef.current?.focus()
    }
  }, [open, locationChange])

  const handleOpenChange = React.useCallback(nextOpen => {
    if (!nextOpen && selectingRef.current) {
      return
    }
    setOpen(nextOpen)
  }, [])

  const trackSelection = React.useCallback(event => {
    const item = event.target.closest?.('[role="menuitem"]')
    selectingRef.current = Boolean(item && !item.hasAttribute('aria-current') && isPlainActivation(event))
  }, [])

  const closeMenu = React.useCallback(() => {
    selectingRef.current = false
    setOpen(false)
  }, [])

  return (
    <>
      <p id={labelId} className={styles.Box}>
        Select CLI Version:
      </p>
      <ActionMenu anchorRef={anchorRef} open={open} onOpenChange={handleOpenChange}>
        <ActionMenu.Button aria-describedby={labelId} className={styles.menuButton}>
          {title}
        </ActionMenu.Button>
        <StyledOverlay width="auto" onEscape={closeMenu}>
          <ActionList aria-labelledby={labelId} onClickCapture={trackSelection} onKeyDownCapture={trackSelection}>
            {latest || current || prerelease ? (
              <ActionList.Group>
                <ActionList.GroupHeading>Current</ActionList.GroupHeading>
                {latest && <VariantItem {...latest} />}
                {current && <VariantItem {...current} />}
                {prerelease && <VariantItem {...prerelease} />}
              </ActionList.Group>
            ) : null}
            <ActionList.Group>
              <ActionList.GroupHeading>Legacy</ActionList.GroupHeading>
              {legacy.map(item => (
                <VariantItem key={item.title} {...item} />
              ))}
            </ActionList.Group>
          </ActionList>
        </StyledOverlay>
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

    const result = {latest: null, current: null, prerelease: null, legacy: []}

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
    <div className={styles.Box_1}>
      <VariantMenu {...variants} />
    </div>
  ) : null
}

export default VariantSelect
