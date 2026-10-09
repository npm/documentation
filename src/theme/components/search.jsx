import {useEffect, useRef} from 'preact/hooks'
import {XIcon, SearchIcon} from '@primer/octicons-react'
import site from '#theme/site'
import * as getNav from '../util/get-nav'
import useFocusTrap from '../hooks/use-focus-trap'
import {announce} from '../util/aria-live'
import {HEADER_BAR, HEADER_HEIGHT, Z_INDEX} from '../constants'
import {ActionList, Item} from './action-list'
import cx from '../util/cx'
import styles from './search.module.css'

const TextInput = ({className, leadingVisual: LeadingVisual, ...inputProps}) => (
  <span className={cx('TextInput', LeadingVisual && 'TextInput--leadingVisual', className)}>
    {LeadingVisual ? (
      <span className="TextInput-icon">
        <LeadingVisual />
      </span>
    ) : null}
    <input className="TextInput-input" {...inputProps} />
  </span>
)

const SearchResults = ({results, getItemProps, highlightedIndex}) => {
  useEffect(() => {
    if (!results || results.length === 0) {
      announce('No results')
    }
  }, [results])

  if (!results || results.length === 0) {
    return (
      <div aria-live="polite" className={styles.Box}>
        No results
      </div>
    )
  }

  return (
    <ActionList>
      {results.map((item, index) => {
        // keep the variant in the breadcrumb if we have one and its not the
        // same as the last breadcrumb. this makes sure that variant index pages
        // don't all appear the same in the search results
        const variant = getNav.getVariant(getNav.getVariantRoot(item.path), item.path)
        const hierarchy = getNav.getItemBreadcrumbs(item.path)
        if (!variant || variant !== hierarchy[hierarchy.length - 1]?.shortName) {
          hierarchy.pop()
        }

        const section = hierarchy.length ? hierarchy.map(s => s.shortName || s.title).join(' / ') : site.shortName

        return (
          <Item
            key={item.path}
            href={item.path}
            className="Link--noUnderline"
            active={highlightedIndex === index}
            itemProps={getItemProps({item, index})}
          >
            <span
              aria-label={`${item.title} in ${section}, ${index + 1} of ${results.length}`}
              className={styles.Box_1}
            >
              <span className={styles.Text}>{section}</span>
              <span>{item.title}</span>
            </span>
          </Item>
        )
      })}
    </ActionList>
  )
}

export const Desktop = props => {
  const {getInputProps, getMenuProps, resultsOpen, ...rest} = props

  return (
    <div className={styles.Box_2}>
      <TextInput
        placeholder={`Search ${site.title}`}
        aria-label={`Search ${site.title}`}
        className={styles.TextInput}
        {...getInputProps()}
      />
      <div className={styles.Box_3} {...getMenuProps()}>
        {resultsOpen ? (
          <div
            data-color-mode="light"
            data-light-theme="light"
            data-dark-theme="dark_dimmed"
            className={styles.LightTheme}
          >
            <SearchResults {...rest} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export const Mobile = ({
  resultsOpen,
  getInputProps,
  getMenuProps,
  isMobileSearchOpen,
  setMobileSearchOpen,
  resetAndClose,
  ...rest
}) => {
  const ref = useRef(null)
  useFocusTrap(ref, isMobileSearchOpen, resetAndClose)

  return (
    <>
      {!isMobileSearchOpen && (
        <button
          type="button"
          aria-label="Search"
          aria-expanded="false"
          onClick={() => setMobileSearchOpen(true)}
          className={cx('Button', styles.Button)}
        >
          <span className="Button-content">
            <span className="Button-label">
              <SearchIcon />
            </span>
          </span>
        </button>
      )}
      {isMobileSearchOpen ? (
        <div ref={ref} style={{top: `${HEADER_BAR}px`, zIndex: Z_INDEX.SEARCH_OVERLAY}} className={styles.Box_4}>
          <div onClick={resetAndClose} className={styles.Box_5} />
          <div style={{height: resultsOpen ? '100%' : 'auto'}} className={styles.Box_6}>
            <div style={{height: `${HEADER_HEIGHT}px`, zIndex: Z_INDEX.SEARCH_OVERLAY + 1}} className={styles.Box_7}>
              <div className={styles.searchBox}>
                <div className={styles.Box_8} />
                <TextInput
                  leadingVisual={SearchIcon}
                  placeholder={`Search ${site.title}`}
                  aria-label={`Search ${site.title}`}
                  className={styles.TextInput_1}
                  {...getInputProps()}
                />
              </div>
              <div className={styles.Box_9} />
              <div className={styles.cancel}>
                <button
                  type="button"
                  aria-label="Cancel"
                  onClick={resetAndClose}
                  className={cx('Button', styles.Button_1)}
                >
                  <span className="Button-content">
                    <span className="Button-label">
                      <XIcon />
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div
              data-color-mode="light"
              data-light-theme="light"
              data-dark-theme="dark_dimmed"
              style={{WebkitOverflowScrolling: 'touch'}}
              className={styles.LightTheme_1}
              {...getMenuProps()}
            >
              {resultsOpen ? <SearchResults {...rest} /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
