import {useCallback, useLayoutEffect, useRef} from 'preact/hooks'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'
import NavItems from './nav-items'
import {FULL_HEADER_HEIGHT} from '../constants'
import styles from './sidebar.module.css'

function usePersistentScroll(id) {
  const ref = useRef()

  const handleScroll = useCallback(
    // Save scroll position in session storage on every scroll change
    event => window.sessionStorage.setItem(id, event.target.scrollTop),
    [id],
  )

  useLayoutEffect(() => {
    // Restore scroll position when component mounts
    const scrollPosition = window.sessionStorage.getItem(id)
    if (scrollPosition && ref.current) {
      ref.current.scrollTop = scrollPosition
    }
  }, [id])

  // Return props to spread onto the scroll container
  return {
    ref,
    onScroll: handleScroll,
  }
}

const Sidebar = ({pathname}) => (
  <nav
    style={{
      top: `${FULL_HEADER_HEIGHT}px`,
      height: `calc(100vh - ${FULL_HEADER_HEIGHT}px)`,
    }}
    className={styles.Box}
  >
    <div {...usePersistentScroll('sidebar')} className={styles.Box_1}>
      <div className={styles.Box_2}>
        <NavItems pathname={pathname} />
      </div>
    </div>
  </nav>
)

export default withIsland(Sidebar, {name: 'SiteSidebar', on: {idle: true}})
