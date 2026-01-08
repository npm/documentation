import React from 'react'
import {Link as PrimerLink} from '@primer/react'
import {Link as GatsbyLink} from 'gatsby'
import omit from '../util/omit'

import * as styles from './link.module.css'

import {clsx} from 'clsx'

const FALLBACK = `http://_${Math.random().toString().slice(2)}._${Math.random().toString().slice(2)}`

const getLocalPath = href => {
  if (!href || href.startsWith('#')) {
    return null
  }

  try {
    const url = new URL(href, FALLBACK)
    if (url.host === 'docs.npmjs.com' || url.origin === FALLBACK) {
      return `${url.pathname}${url.search}${url.hash}`
    }
  } catch {
    // ignore errors which will just pass along all props to PrimerLink
  }

  return null
}

const GatsbyLinkWithoutSxProps = React.forwardRef(function GatsbyLinkWithoutSxProps(props, ref) {
  return <GatsbyLink ref={ref} {...omit(props, 'sx', 'underline', 'hoverColor', 'muted')} />
})

const Link = React.forwardRef(function Link({to, href, showUnderline = false, className, ...props}, ref) {
  const localPath = getLocalPath(href)
  const combinedClassName = showUnderline ? clsx(className, styles.showUnderline) : className

  if (to || localPath !== null) {
    return (
      <PrimerLink
        ref={ref}
        as={GatsbyLinkWithoutSxProps}
        to={to || localPath}
        className={combinedClassName}
        {...props}
      />
    )
  }

  return <PrimerLink ref={ref} href={href} className={combinedClassName} {...props} />
})

export const LinkNoUnderline = React.forwardRef(function LinkNoUnderline({className, ...props}, ref) {
  return <Link ref={ref} className={clsx(styles.Link, className)} {...props} />
})

export default Link
