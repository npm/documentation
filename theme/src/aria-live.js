/**
 * This is an implementation of the
 * aria-live guide:
 * https://github.com/github/thehub/blob/main/docs/epd/engineering/dev-practicals/frontend/accessibility/readiness-routine/screenreaders/live-regions-and-screen-reader-announcements.md
 *
 * The code is heavily borrowed from https://github.com/github/github/blob/master/app/assets/modules/github/aria-live.ts
 */

let container

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    createNoticeContainer()
  })
}

// Announce message update to screen reader.
function announce (message) {
  if (!container || !container.isConnected) {
    /* This condition is for when the aria-live container no longer exists due to nav methods like turbo drive
     which replace the body getting rid of the region. We add the container if it's missing. We then add a delay
     to ensure aria-live can work correctly.
     Note: This approach is not ideal and should be revisited.
     See https://github.com/github/accessibility/issues/1900#issuecomment-1254369320
     */
    createNoticeContainer()
    setTimeout(() => {
      setContainerContent(message)
    }, 200)
  } else {
    setContainerContent(message)
  }
}

// Set aria-live container to message.
function setContainerContent (message) {
  if (!container) {
    return
  }
  if (container.textContent === message) {
    /* This is a hack due to the way the aria live API works.
     A screen reader will not read a live region again
     if the text is the same. Adding a space character tells
     the browser that the live region has updated,
     which will cause it to read again, but with no audible difference. */
    container.textContent = `${message}\u00A0`
  } else {
    container.textContent = message
  }
}

// Get the global screen reader notice container.
function createNoticeContainer () {
  container = document.createElement('div')
  container.setAttribute('aria-live', 'polite')
  container.style.position = 'absolute'
  container.style.width = '1px'
  container.style.height = '1px'
  container.style.padding = '0'
  container.style.overflow = 'hidden'
  container.style.clip = 'rect(0, 0, 0, 0)'
  container.style.wordWrap = 'normal'
  container.style.border = '0'
  document.body.append(container)
}

module.exports = {
  announce,
}
