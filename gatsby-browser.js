const React = require("react")

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <div {...props} onKeyDown={onKeyDown}>{element}</div>
}

function onKeyDown(event) {
  if(!document.activeElement) {
    return
  }
  const { activeElement } = document
  const allLinks = getFocusableElements()
  if(event.key === 'ArrowDown' || event.key === 'ArrowUp' ) {
    const activeIndex = getIndex(allLinks, activeElement)
    if (activeIndex === -1) {
      return
    }
    let nextIndex = activeIndex
    if (event.key === 'ArrowDown') {
      nextIndex++
    } else {
      nextIndex--
    }
    if (nextIndex >=0 && nextIndex < allLinks.length) {
      allLinks[nextIndex].focus()
    }
  }
}

function getIndex(allLinks, activeElement) {
  for (let index=0; index < allLinks.length; index++) {
    const link = allLinks[index]
    if (link === activeElement) {
      return index
    }
  }
  return -1
}

function getFocusableElements() {
  return document.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
  );
}