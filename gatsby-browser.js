import {SKIP_TO_SEARCH_ID} from './src/constants'

export {default as wrapPageElement} from './src/page'
export {default as wrapRootElement} from './src/root'

const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml'

const toHtmlNamespace = node => {
  const element = document.createElement(node.nodeName.toLowerCase())
  for (const {name, value} of node.attributes) {
    element.setAttribute(name, value)
  }
  element.textContent = node.textContent
  return element
}

const fixHeadNamespaces = () => {
  for (const node of document.head.querySelectorAll('[data-gatsby-head]')) {
    if (node.namespaceURI !== HTML_NAMESPACE) {
      node.replaceWith(toHtmlNamespace(node))
    }
  }
}

export const onClientEntry = () => {
  new MutationObserver(fixHeadNamespaces).observe(document.head, {childList: true})
}

export const shouldUpdateScroll = ({routerProps}) => {
  const {scrollUpdate = true} = routerProps.location.state ?? {}
  return scrollUpdate
}

export const onRouteUpdate = ({location, prevLocation}) => {
  if (location.hash === `#${SKIP_TO_SEARCH_ID}` && prevLocation?.hash !== `#${SKIP_TO_SEARCH_ID}`) {
    document.getElementById(SKIP_TO_SEARCH_ID)?.focus()
  }
}
