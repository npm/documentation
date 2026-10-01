import {cloneElement, toChildArray} from 'preact'
import TrustedPublisherSwitcherIsland from './trusted-publisher-switcher-island'

const getOptionName = child => child?.props?.name

/**
 * `<TrustedPublisherSwitcher>`: a select that switches between the
 * `<TrustedPublisherOption>`s inside it. Every switcher on a page stays in
 * sync, so one can be rendered with `control` (just the select) elsewhere on
 * the page, or with `hideControl` (just the content).
 */
const TrustedPublisherSwitcher = ({
  label = 'Trusted publisher setup:',
  control = false,
  hideControl = false,
  children,
}) => {
  const options = toChildArray(children).filter(child => getOptionName(child))
  const names = options.map(getOptionName)

  return (
    <TrustedPublisherSwitcherIsland label={label} control={control} hideControl={hideControl} names={names}>
      {options.map((child, index) => cloneElement(child, {active: index === 0}))}
    </TrustedPublisherSwitcherIsland>
  )
}

export default TrustedPublisherSwitcher
