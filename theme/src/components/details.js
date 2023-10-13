import React from 'react'
import styled from 'styled-components'

// The <details> element is not yet supported in Edge so we have to use a polyfill.
// We have to check if window is defined before importing the polyfill
// so the code doesn’t run while Gatsby is building.
if (typeof window !== 'undefined') {
  require('details-element-polyfill')
}

// TODO: Replace this Details component with the one from @primer/components when 14.0.0 is released.
// Reference: https://github.com/primer/components/pull/499

const DetailsReset = styled.details`
  & > summary {
    list-style: none;
  }

  & > summary::-webkit-details-marker {
    display: none;
  }

  & > summary::before {
    display: none;
  }
`

function getRenderer(children) {
  return typeof children === 'function' ? children : () => children
}

function Details({children, overlay, render = getRenderer(children), ...rest}) {
  const [open, setOpen] = React.useState(Boolean(rest.open))

  function toggle(event) {
    if (event) {
      event.preventDefault()
    }
    if (overlay) {
      openMenu()
    } else {
      setOpen(!open)
    }
  }

  function openMenu() {
    if (!open) {
      setOpen(true)
      document.addEventListener('click', closeMenu)
    }
  }

  function closeMenu() {
    setOpen(false)
    document.removeEventListener('click', closeMenu)
  }

  return (
    <DetailsReset {...rest} open={open}>
      {render({open, toggle})}
    </DetailsReset>
  )
}

Details.defaultProps = {
  overlay: false,
}

export default Details
