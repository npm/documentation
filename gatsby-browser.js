import {SKIP_TO_SEARCH_ID} from './src/constants'

export {default as wrapPageElement} from './src/page'
export {default as wrapRootElement} from './src/root'

export const shouldUpdateScroll = ({routerProps}) => {
  const {scrollUpdate = true} = routerProps.location.state ?? {}
  return scrollUpdate
}

export const onRouteUpdate = ({location, prevLocation}) => {
  if (location.hash === `#${SKIP_TO_SEARCH_ID}` && prevLocation?.hash !== `#${SKIP_TO_SEARCH_ID}`) {
    document.getElementById(SKIP_TO_SEARCH_ID)?.focus()
  }
}
