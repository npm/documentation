import {useEffect, useRef, useState} from 'preact/hooks'
import withIsland from '@doc-kit/generator-react/html/ui/islands/withIsland.jsx'

// Shared store so every TrustedPublisherSwitcher on a page stays in sync.
const publisherModeListeners = new Set()
let selectedPublisherMode = null

const setSelectedPublisherMode = name => {
  selectedPublisherMode = name
  for (const listener of publisherModeListeners) listener(name)
}

const useSelectedPublisherMode = defaultName => {
  const [value, setValue] = useState(selectedPublisherMode ?? defaultName)

  useEffect(() => {
    if (selectedPublisherMode == null && defaultName != null) {
      selectedPublisherMode = defaultName
    }
    const listener = name => setValue(name)
    publisherModeListeners.add(listener)
    return () => publisherModeListeners.delete(listener)
  }, [defaultName])

  return value
}

/**
 * The interactive part of `<TrustedPublisherSwitcher>`. The options are
 * rendered on the server; selecting one shows it and hides the others.
 */
const TrustedPublisherSwitcherIsland = ({label, control, hideControl, names, children}) => {
  const defaultName = names[0]
  const selected = useSelectedPublisherMode(defaultName)
  const active = names.includes(selected) ? selected : defaultName
  const contentRef = useRef(null)

  useEffect(() => {
    for (const option of contentRef.current?.querySelectorAll('[data-publisher-option]') ?? []) {
      option.hidden = option.getAttribute('data-publisher-option') !== active
    }
  }, [active])

  const selectEl = (
    <label className="publisher-switcher-label">
      {label}
      <select
        className="publisher-switcher-select"
        value={active}
        onChange={event => setSelectedPublisherMode(event.currentTarget.value)}
      >
        {names.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </label>
  )

  if (control) {
    return <div className="publisher-switcher">{selectEl}</div>
  }

  return (
    <div className="publisher-switcher">
      {!hideControl && selectEl}
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export default withIsland(TrustedPublisherSwitcherIsland, {name: 'TrustedPublisherSwitcherIsland', on: {idle: true}})
