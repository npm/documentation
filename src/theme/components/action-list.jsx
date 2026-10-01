import {ChevronDownIcon} from '@primer/octicons-react'
import cx from '../util/cx'

/**
 * The pieces of Primer's ActionList and NavList the site is built from.
 */

export const ActionList = ({as: As = 'ul', variant = 'inset', className, children, ...props}) => (
  <As className={cx('ActionList', variant === 'inset' && 'ActionList--inset', className)} {...props}>
    {children}
  </As>
)

export const Divider = () => <li className="ActionList-divider" aria-hidden="true" />

export const Group = ({heading, children, ...props}) => (
  <>
    <Divider />
    <li className="ActionList-group" {...props}>
      {heading ? (
        <div className="ActionList-groupHeadingWrap">
          <h3 className="ActionList-groupHeading">{heading}</h3>
        </div>
      ) : null}
      <ul className="ActionList-groupList">{children}</ul>
    </li>
  </>
)

export const Label = ({className, children, ...props}) => (
  <span className={cx('ActionList-label', className)} {...props}>
    {children}
  </span>
)

export const TrailingVisual = ({children}) => (
  <span className="ActionList-trailingVisual ActionList-visualWrap">{children}</span>
)

/**
 * A list item. `as` is the element the content is rendered with (`a` for
 * links, `button` for toggles); `active` highlights the item.
 */
export const Item = ({
  as: As = 'a',
  active = false,
  depth = 0,
  className,
  itemProps,
  trailingVisual,
  children,
  subItems,
  ...props
}) => (
  <li
    className={cx('ActionList-item', className)}
    data-active={active ? 'true' : undefined}
    data-has-subitem={subItems ? 'true' : undefined}
    {...itemProps}
  >
    <As className="ActionList-content" style={{'--subitem-depth': depth}} {...props}>
      <span className="ActionList-spacer" />
      <span className="ActionList-subContent">
        <Label>{children}</Label>
        {trailingVisual ? <TrailingVisual>{trailingVisual}</TrailingVisual> : null}
      </span>
    </As>
    {subItems}
  </li>
)

/**
 * A NavList item with a sub-navigation: a button that expands it.
 */
export const ItemWithSubNav = ({active = false, open, onToggle, depth = 0, id, children, subNav}) => (
  <li className="ActionList-item" data-active={active ? 'true' : undefined} data-has-subitem="true">
    <button
      type="button"
      className="ActionList-content"
      style={{'--subitem-depth': depth}}
      aria-expanded={open ? 'true' : 'false'}
      aria-controls={id}
      onClick={onToggle}
    >
      <span className="ActionList-spacer" />
      <span className="ActionList-subContent">
        <Label>{children}</Label>
        <TrailingVisual>
          <ChevronDownIcon className="ActionList-expandIcon" />
        </TrailingVisual>
      </span>
    </button>
    <ul className="ActionList-subGroup" id={id}>
      {subNav}
    </ul>
  </li>
)
