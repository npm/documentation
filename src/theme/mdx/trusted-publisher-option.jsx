/**
 * One of the setups a `<TrustedPublisherSwitcher>` switches between. Only the
 * selected one is shown.
 */
const TrustedPublisherOption = ({name, active = false, children}) => (
  <div data-publisher-option={name} hidden={!active}>
    {children}
  </div>
)

export default TrustedPublisherOption
