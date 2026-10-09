import {useEffect, useRef, useState} from 'preact/hooks'
import {XIcon, ThreeBarsIcon} from '@primer/octicons-react'
import NavItems from './nav-items'
import SiteTitle from './site-title'
import {useIsMobile} from '../hooks/use-media-query'
import useFocusTrap from '../hooks/use-focus-trap'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'
import cx from '../util/cx'
import styles from './nav-drawer.module.css'

const Drawer = ({isOpen, onDismiss, children}) => {
  const ref = useRef(null)
  useFocusTrap(ref, isOpen, onDismiss)

  if (!isOpen) {
    return null
  }

  return (
    <div ref={ref} data-color-mode="light" data-light-theme="light" data-dark-theme="dark_dimmed">
      <div className={styles.Box} onClick={onDismiss} />
      <div style={{top: `${HEADER_BAR}px`}} className={styles.Box_1}>
        {children}
      </div>
    </div>
  )
}

function NavDrawer({pathname}) {
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false)
    }
  }, [isMobile, open])

  return (
    <>
      <button
        type="button"
        aria-label="Menu"
        aria-expanded={open ? 'true' : 'false'}
        onClick={() => setOpen(true)}
        className={cx('Button', styles.Button)}
      >
        <span className="Button-content">
          <span className="Button-label">
            <ThreeBarsIcon />
          </span>
        </span>
      </button>
      <Drawer isOpen={open} onDismiss={() => setOpen(false)}>
        <div style={{WebkitOverflowScrolling: 'touch'}} className={styles.Box_2}>
          <div className={styles.Box_3}>
            <div
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark_dimmed"
              style={{height: `${HEADER_HEIGHT}px`}}
              className={styles.DarkTheme}
            >
              <SiteTitle />
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="Button">
                <span className="Button-content">
                  <span className="Button-label">
                    <XIcon />
                  </span>
                </span>
              </button>
            </div>
            <div className={styles.Box_4}>
              <NavItems pathname={pathname} />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default NavDrawer
