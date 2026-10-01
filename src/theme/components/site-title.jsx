import Link from './link'
import site from '#theme/site'
import cx from '../util/cx'
import styles from './site-title.module.css'

const NpmLogo = ({size, className}) => (
  <div className={cx(styles.Box, className)}>
    <svg height={size} width={size} viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
      <polygon fill="currentColor" points="0,700 700,700 700,0 0,0" />
      <polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 " />
    </svg>
  </div>
)

const SiteTitle = ({logo, className}) => (
  <Link to="/" className={cx(styles.Link, className)}>
    {logo ? <NpmLogo size="32" className={styles.NpmLogo} /> : null}
    {site.title}
  </Link>
)

export default SiteTitle
