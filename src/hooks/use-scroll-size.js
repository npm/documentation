import {createRef, useState, useEffect} from 'react'

/**
 * Resize the scroll handle to the size of the code contents, since the former has to be positioned absolutely.
 */
const useScrollSize = () => {
  const scrollRef = createRef()
  const paddingRef = createRef()
  const [size, setSize] = useState({})

  useEffect(() => {
    const scrollNode = scrollRef.current
    const paddingNode = paddingRef.current

    if (!scrollNode || !paddingNode || typeof size.width !== 'undefined') {
      return
    }

    const parent = scrollNode.parentElement
    const button = paddingNode.firstChild

    parent.style.position = 'relative'
    const parentStyle = getComputedStyle(parent)
    const paddingTop = parseInt(parentStyle.paddingTop, 10)
    const paddingBottom = parseInt(parentStyle.paddingBottom, 10)
    const paddingRight = parseInt(parentStyle.paddingRight, 10)

    setSize({
      height: parent.clientHeight - paddingTop - paddingBottom,
      width: parent.scrollWidth - paddingRight + button.clientWidth,
    })
  }, [scrollRef, paddingRef, size])

  return {scrollRef, paddingRef, size}
}

export default useScrollSize
