import Link from './link'
import {SKIP_TO_CONTENT_ID} from '../constants'
import styles from './skip-nav.module.css'

export const SkipLink = props => <Link className={styles.SkipLink} {...props} />

// The following rules are to ensure that the element is visually hidden, unless
// it has focus. This is the recommended way to hide content from:
// https://webaim.org/techniques/css/invisiblecontent/#techniques
export const SkipBox = props => <div className={styles.SkipBox} {...props} />

export const SkipNav = props => <div id={SKIP_TO_CONTENT_ID} className={styles.SkipNav} {...props} />
