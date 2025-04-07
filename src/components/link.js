import React from 'react'
import {Link as PrimerLink} from '@primer/react'
import omit from '../util/omit'

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

const BasicLinkAdapter = React.forwardRef(function BasicLinkAdapter(props, ref) {
  const { to, ...otherProps } = props
  // Convert 'to' prop to 'href' for regular anchor tags
  return (
    <a
      ref={ref}
      href={to}
      {...omit(otherProps, 'sx', 'underline', 'hoverColor', 'muted')}
      aria-label={otherProps['aria-label'] || 'Link'}
    >
      {props.children || 'Link'}
    </a>
  )
})

const Link = React.forwardRef(function Link({to, href, ...props}, ref) {
  const localPath = getLocalPath(href)

  if (to || localPath !== null) {
    return <PrimerLink ref={ref} as={BasicLinkAdapter} to={to || localPath} {...props} />
  }

  return <PrimerLink ref={ref} href={href} {...props} />
})

export const LinkNoUnderline = React.forwardRef(function LinkNoUnderline({sx, ...props}, ref) {
  return (
    <Link
      ref={ref}
      sx={{
        ...sx,
        '&:hover, &:focus': {
          textDecoration: 'none',
        },
      }}
      {...props}
    />
  )
})

export default Link
