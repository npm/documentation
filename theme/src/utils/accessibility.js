module.exports = {
  activateArrowKeyNavigation
}
function activateArrowKeyNavigation (container, targetSelector) {
  if (!(container && targetSelector)) return
  const targets = [...container.querySelectorAll(targetSelector)]
  const navigationHandler = event => {
    let index = targets.indexOf(event.target)
    switch (event.key) {
      case 'ArrowUp':
        index--
        break
      case 'ArrowDown':
        index++
        break
      default:
        return
    }
    if (index >= 0 && index < targets.length) {
      event.preventDefault()
      targets[index].focus()
    }
  }

  targets.forEach(target => target.addEventListener('keydown', navigationHandler))
  return {
    targets,
    deactivate: () => targets.forEach(target => target.removeEventListener('keydown', navigationHandler))
  }
}