import cx from '../util/cx'

/**
 * A link styled like Primer's. `to` and `href` are interchangeable, as they
 * were when internal links were routed on the client.
 */
const Link = ({to, href, showUnderline = false, className, children, ...props}) => (
  <a href={to ?? href} className={cx('Link', showUnderline && 'Link--underline', className)} {...props}>
    {children}
  </a>
)

export const LinkNoUnderline = ({className, ...props}) => (
  <Link className={cx('Link--noUnderline', className)} {...props} />
)

export default Link
