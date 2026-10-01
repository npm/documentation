import {useCallback, useEffect, useMemo, useRef, useState} from 'preact/hooks'
import {TriangleDownIcon} from '@primer/octicons-react'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'
import * as getNav from '../util/get-nav'
import {ActionList, Group, Item} from './action-list'
import cx from '../util/cx'
import styles from './variant-select.module.css'

// Switching versions keeps the reading position and the focus on the menu,
// across the page load.
const RESTORE_KEY = 'variant-select'

const VariantItem = ({title, shortName, url, active, onSelect}) => (
  <Item
    href={url}
    id={shortName}
    active={active}
    aria-current={active ? 'page' : undefined}
    role="menuitem"
    tabIndex={-1}
    onClick={onSelect}
  >
    {title}
  </Item>
)

const useVariants = path =>
  useMemo(() => {
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

const VariantMenu = ({title, latest, current, prerelease, legacy}) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const menuRef = useRef(null)
  const labelId = 'label-versions-list-item'

  // After switching versions, go back to where the reader was.
  useEffect(() => {
    const restore = window.sessionStorage.getItem(RESTORE_KEY)
    if (!restore) {
      return
    }
    window.sessionStorage.removeItem(RESTORE_KEY)
    anchorRef.current?.focus({preventScroll: true})
    window.scrollTo(0, Number(restore))
  }, [])

  const onSelect = useCallback(() => {
    window.sessionStorage.setItem(RESTORE_KEY, String(window.scrollY))
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const menu = menuRef.current
    const items = () => [...menu.querySelectorAll('[role="menuitem"]')]
    items()[0]?.focus()

    const close = () => {
      setOpen(false)
      anchorRef.current?.focus()
    }

    const onKeyDown = event => {
      const list = items()
      const index = list.indexOf(document.activeElement)
      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          close()
          break
        case 'ArrowDown':
          event.preventDefault()
          list[(index + 1) % list.length]?.focus()
          break
        case 'ArrowUp':
          event.preventDefault()
          list[(index - 1 + list.length) % list.length]?.focus()
          break
        case 'Home':
          event.preventDefault()
          list[0]?.focus()
          break
        case 'End':
          event.preventDefault()
          list[list.length - 1]?.focus()
          break
        case 'Tab':
          setOpen(false)
          break
        default:
      }
    }

    const onPointerDown = event => {
      if (!menu.contains(event.target) && !anchorRef.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    menu.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      menu.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <>
      <p id={labelId} className={styles.Box}>
        Select CLI Version:
      </p>
      <div className={styles.menu}>
        <button
          ref={anchorRef}
          type="button"
          className={cx('Button', styles.menuButton)}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : 'false'}
          aria-describedby={labelId}
          onClick={() => setOpen(value => !value)}
        >
          <span className="Button-content">
            <span className="Button-label">{title}</span>
          </span>
          <span className="Button-visual">
            <TriangleDownIcon />
          </span>
        </button>
        {open ? (
          <div ref={menuRef} className={cx('Overlay', styles.Overlay)} role="none">
            <ActionList role="menu" aria-labelledby={labelId}>
              <Group heading="Current">
                <VariantItem {...latest} onSelect={onSelect} />
                {current && <VariantItem {...current} onSelect={onSelect} />}
                {prerelease && <VariantItem {...prerelease} onSelect={onSelect} />}
              </Group>
              <Group heading="Legacy">
                {legacy.map(item => (
                  <VariantItem key={item.title} {...item} onSelect={onSelect} />
                ))}
              </Group>
            </ActionList>
          </div>
        ) : null}
      </div>
    </>
  )
}

/**
 * The CLI version picker, on CLI pages.
 */
const VariantSelect = ({pathname}) => {
  const variants = useVariants(pathname)
  return variants ? (
    <div className={styles.Box_1}>
      <VariantMenu {...variants} />
    </div>
  ) : null
}

export default withIsland(VariantSelect, {name: 'VariantSelect', on: {idle: true}})
