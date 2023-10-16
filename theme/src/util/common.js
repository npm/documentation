
export function makePreElementsFocusable() {
    const preElements = document.getElementsByTagName('pre')
    const preElementsList = Array.prototype.slice.call(preElements)
    for (const pre of preElementsList) {
      pre.setAttribute('tabindex', 0)
    }
  }
