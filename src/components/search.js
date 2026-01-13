import React from 'react'
import {Button, ActionList, Text} from '@primer/react'
import {XIcon, SearchIcon} from '@primer/octicons-react'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import TextInput from './text-input'
import useSiteMetadata from '../hooks/use-site-metadata'
import {HEADER_BAR, HEADER_HEIGHT, Z_INDEX} from '../constants'
import {LightTheme} from '../theme'
import {LinkNoUnderline} from './link'
import * as getNav from '../util/get-nav'
import omit from '../util/omit'
import {announce} from '../util/aria-live'

import * as styles from './search.module.css'

const SearchResults = ({results, getItemProps, highlightedIndex}) => {
  const siteMetadata = useSiteMetadata()
  if (!results || results.length === 0) {
    announce('No results')
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

        return (
          <ActionList.Item
            key={item.path}
            // fixes a bug between downshift and react/primer where the search result item is always disabled
            // this is safe to remove because we know we never have any disabled search results
            {...omit(getItemProps({item, index}), 'aria-disabled')}
            as={LinkNoUnderline}
            to={item.path}
            active={highlightedIndex === index}
          >
            <div
              aria-label={`${item.title}${hierarchy.length ? ` in ${hierarchy.map(s => s.shortName || s.title).join(' / ')}` : ` in ${siteMetadata.shortName}`}, ${index + 1} of ${results.length}`}
              className={styles.Box_1}
            >
              <Text className={styles.Text}>
                {hierarchy.length ? hierarchy.map(s => s.shortName || s.title).join(' / ') : siteMetadata.shortName}
              </Text>
              <Text>{item.title}</Text>
            </div>
          </ActionList.Item>
        )
      })}
    </ActionList>
  )
}

export const Desktop = props => {
  const siteMetadata = useSiteMetadata()
  const {getInputProps, getMenuProps, resultsOpen, ...rest} = props

  return (
    <div className={styles.Box_2}>
      <TextInput
        placeholder={`Search ${siteMetadata.title}`}
        aria-label={`Search ${siteMetadata.title}`}
        className={styles.TextInput}
        {...getInputProps()}
      />
      <div className={styles.Box_3} {...getMenuProps()}>
        {resultsOpen ? (
          <LightTheme className={styles.LightTheme}>
            <SearchResults {...rest} />
          </LightTheme>
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
  isForceClose,
  resetAndClose,
  ...rest
}) => {
  const siteMetadata = useSiteMetadata()
  const getCloseAnimation = exit => (isForceClose ? undefined : {exit})

  const handleSearchToggle = React.useCallback(() => {
    setMobileSearchOpen(true)
  }, [setMobileSearchOpen])

  return (
    <>
      {!isMobileSearchOpen && (
        <Button
          aria-label="Search"
          aria-expanded={isMobileSearchOpen}
          onClick={handleSearchToggle}
          className={styles.Button}
        >
          <SearchIcon />
        </Button>
      )}
      <AnimatePresence>
        {isMobileSearchOpen ? (
          <FocusOn returnFocus={true} onEscapeKey={() => resetAndClose(true)}>
            <div
              style={{
                top: `${HEADER_BAR}px`,
                zIndex: Z_INDEX.SEARCH_OVERLAY,
              }}
              className={styles.Box_4}
            >
              <motion.div
                key="search-backdrop"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'tween'}}
                onClick={() => resetAndClose(true)}
                className={styles.Box_5}
                {...getCloseAnimation({opacity: 0})}
              />
              <div
                style={{
                  height: resultsOpen ? '100%' : 'auto',
                }}
                className={styles.Box_6}
              >
                <div
                  style={{
                    height: `${HEADER_HEIGHT}px`,
                    zIndex: Z_INDEX.SEARCH_OVERLAY + 1,
                  }}
                  className={styles.Box_7}
                >
                  <motion.div
                    key="search-box"
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    {...getCloseAnimation({scaleX: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    style={{width: '100%', originX: '100%'}}
                  >
                    <div className={styles.Box_8} />
                    <TextInput
                      leadingVisual={SearchIcon}
                      placeholder={`Search ${siteMetadata.title}`}
                      aria-label={`Search ${siteMetadata.title}`}
                      className={styles.TextInput_1}
                      {...getInputProps()}
                    />
                  </motion.div>
                  <motion.div
                    key="button-blocker"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    {...getCloseAnimation({scaleX: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    className={styles.Box_9}
                  />
                  <motion.div
                    key="button"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    {...getCloseAnimation({opacity: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                  >
                    <Button aria-label="Cancel" onClick={() => resetAndClose(false)} className={styles.Button_1}>
                      <XIcon />
                    </Button>
                  </motion.div>
                </div>
                <LightTheme
                  style={{
                    WebkitOverflowScrolling: 'touch',
                  }}
                  className={styles.LightTheme_1}
                  {...getMenuProps()}
                >
                  {resultsOpen ? <SearchResults {...rest} /> : null}
                </LightTheme>
              </div>
            </div>
          </FocusOn>
        ) : null}
      </AnimatePresence>
    </>
  )
}
