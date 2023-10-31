import React from 'react'
import {Button, ActionList, Box, Text} from '@primer/react'
import {XIcon, SearchIcon} from '@primer/octicons-react'
import {AnimatePresence, motion} from 'framer-motion'
import {FocusOn} from 'react-focus-on'
import TextInput from './text-input'
import useSiteMetadata from '../hooks/use-site-metadata'
import {HEADER_BAR, HEADER_HEIGHT} from '../constants'
import {LightTheme} from '../theme'
import {LinkNoUnderline} from './link'
import * as getNav from '../util/get-nav'
import omit from '../util/omit'

const SearchResults = ({results, getItemProps, highlightedIndex}) => {
  const siteMetadata = useSiteMetadata()

  if (!results || results.length === 0) {
    return <Box sx={{fontSize: 2, px: 3, py: 3}}>No results</Box>
  }

  return (
    <ActionList>
      {results.map((item, index) => {
        // keep the variant in the breadcrumb if we have one and its not the
        // same as the last breadcrumb. this makes sure that variant index pages
        // don't all appear the same in the search results
        const variant = getNav.getVariant(getNav.getVariantRoot(item.path), item.path)
        const hierarchy = getNav.getItemBreadcrumbs(item.path)
        if (!variant || variant !== hierarchy[hierarchy.length - 1].shortName) {
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
            <Box sx={{display: 'flex', flexDirection: 'column', flex: '0 0 auto'}}>
              <Text sx={{fontSize: 0}}>
                {hierarchy.length ? hierarchy.map(s => s.shortName || s.title).join(' / ') : siteMetadata.shortName}
              </Text>
              <Text>{item.title}</Text>
            </Box>
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
    <Box sx={{position: 'relative'}}>
      <TextInput
        sx={{width: '240px'}}
        placeholder={`Search ${siteMetadata.title}`}
        aria-label={`Search ${siteMetadata.title}`}
        {...getInputProps()}
      />
      <Box sx={{position: 'absolute', left: 0, right: 0, pt: 1}} {...getMenuProps()}>
        {resultsOpen ? (
          <LightTheme
            sx={{
              overflow: 'auto',
              minWidth: 300,
              maxHeight: '70vh',
              boxShadow: 'shadow.large',
              borderColor: 'border.muted',
              bg: 'canvas.overlay',
              borderRadius: 2,
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          >
            <SearchResults {...rest} />
          </LightTheme>
        ) : null}
      </Box>
    </Box>
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

  return (
    <>
      <Button aria-label="Search" aria-expanded={isMobileSearchOpen} onClick={() => setMobileSearchOpen(true)}>
        <SearchIcon />
      </Button>
      <AnimatePresence>
        {isMobileSearchOpen ? (
          <FocusOn returnFocus={true} onEscapeKey={() => resetAndClose(true)}>
            <Box
              sx={{
                position: 'fixed',
                top: `${HEADER_BAR}px`,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: 'overlay.backdrop',
                  zIndex: -1,
                }}
                key="search-backdrop"
                as={motion.div}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'tween'}}
                onClick={() => resetAndClose(true)}
                {...getCloseAnimation({opacity: 0})}
              />
              <Box sx={{display: 'flex', flexDirection: 'column', height: resultsOpen ? '100%' : 'auto'}}>
                <Box
                  sx={{
                    display: 'flex',
                    color: 'fg.default',
                    height: `${HEADER_HEIGHT}px`,
                    flex: '0 0 auto',
                    px: 3,
                    alignItems: 'center',
                    border: '1px solid',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderColor: 'border.muted',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    key="search-box"
                    initial={{scaleX: 0}}
                    animate={{scaleX: 1}}
                    {...getCloseAnimation({scaleX: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    style={{width: '100%', originX: '100%'}}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: '70px',
                        bg: 'canvas.default',
                        zIndex: '-1',
                      }}
                    />
                    <TextInput
                      leadingVisual={SearchIcon}
                      placeholder={`Search ${siteMetadata.title}`}
                      aria-label={`Search ${siteMetadata.title}`}
                      sx={{width: '100%'}}
                      {...getInputProps()}
                    />
                  </motion.div>
                  <Box
                    key="button-blocker"
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    {...getCloseAnimation({scaleX: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      right: 0,
                      width: '70px',
                      bg: 'canvas.default',
                      zIndex: '-1',
                    }}
                  />
                  <Box
                    key="button"
                    as={motion.div}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    {...getCloseAnimation({opacity: 0})}
                    transition={{type: 'tween', ease: 'easeOut', duration: 0.2}}
                  >
                    <Button sx={{ml: 3}} aria-label="Cancel" onClick={() => resetAndClose(false)}>
                      <XIcon />
                    </Button>
                  </Box>
                </Box>
                <LightTheme
                  sx={{
                    display: 'flex',
                    bg: 'canvas.default',
                    flexDirection: 'column',
                    flex: '1 1 auto',
                    overflow: 'auto',
                  }}
                  style={{
                    WebkitOverflowScrolling: 'touch',
                  }}
                  {...getMenuProps()}
                >
                  {resultsOpen ? <SearchResults {...rest} /> : null}
                </LightTheme>
              </Box>
            </Box>
          </FocusOn>
        ) : null}
      </AnimatePresence>
    </>
  )
}
