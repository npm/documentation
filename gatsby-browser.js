export {default as wrapPageElement} from './src/page'
export {default as wrapRootElement} from './src/root'

export const shouldUpdateScroll = ({routerProps}) => {
  const {scrollUpdate = true} = routerProps.location.state ?? {}
  return scrollUpdate
}
