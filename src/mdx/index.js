import React from 'react'
import {Box, Heading, themeGet, Text, Link as PrimerLink} from '@primer/react'
import styled from 'styled-components'
import {withPrefix} from 'gatsby'
import {LinkIcon} from '@primer/octicons-react'
import textContent from 'react-addons-text-content'
import Code from './code'
import NavHierarchy from './nav-hierarchy'
import {useSlugger} from '../layout'
import {HEADER_HEIGHT, SKIP_NAV} from '../constants'

const required = (prop, name) => {
  if (!prop) {
    throw new Error(`${name} prop is required`)
  }
  return prop
}

export const Link = props => {
  return <PrimerLink {...props} underline={true} />
}

export {Code, NavHierarchy as Index}

export const Pre = ({children}) => children

const SkipLinkBase = props => (
  <PrimerLink {...props} href={`#${SKIP_NAV}`} sx={{backgroundColor: 'blue.6', color: 'white', p: 3, fontSize: 1}}>
    Skip to content
  </PrimerLink>
)

export const SkipLink = styled(SkipLinkBase)`
  z-index: 20;
  width: auto;
  height: auto;
  clip: auto;
  position: absolute;
  overflow: hidden;

  // The following rules are to ensure that the element
  // is visually hidden, unless it has focus. This is the recommended
  // way to hide content from:
  // https://webaim.org/techniques/css/invisiblecontent/#techniques

  &:not(:focus) {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }
`

const StyledHeading = styled(Heading)`
  margin-top: ${themeGet('space.4')};
  margin-bottom: ${themeGet('space.3')};
  scroll-margin-top: ${HEADER_HEIGHT + 24}px;

  & .octicon-link {
    visibility: hidden;
  }

  &:hover .octicon-link,
  &:focus-within .octicon-link {
    visibility: visible;
  }
`

const Headings = {
  Markdown: ({children, ...props}) => {
    const slugger = useSlugger()
    const text = children ? textContent(children) : ''
    const id = text ? slugger.slug(text) : ''

    return (
      <StyledHeading id={id} {...props}>
        <PrimerLink href={`#${id}`} sx={{p: 2, ml: -32, color: 'gray.8'}} aria-label={`${text} permalink`}>
          <LinkIcon className="octicon-link" verticalAlign="middle" />
        </PrimerLink>
        {children}
      </StyledHeading>
    )
  },
  h1: styled(StyledHeading).attrs({as: 'h1'})`
    padding-bottom: ${themeGet('space.1')};
    font-size: ${themeGet('fontSizes.5')};
    border-bottom: 1px solid ${themeGet('colors.gray.2')};
  `,
  h2: styled(StyledHeading).attrs({as: 'h2'})`
    padding-bottom: ${themeGet('space.1')};
    font-size: ${themeGet('fontSizes.4')};
    border-bottom: 1px solid ${themeGet('colors.gray.2')};
  `,
  h3: styled(StyledHeading).attrs({as: 'h3'})`
    font-size: ${themeGet('fontSizes.3')};
  `,
  h4: styled(StyledHeading).attrs({as: 'h4'})`
    font-size: ${themeGet('fontSizes.2')};
  `,
  h5: styled(StyledHeading).attrs({as: 'h5'})`
    font-size: ${themeGet('fontSizes.1')};
  `,
  h6: styled(StyledHeading).attrs({as: 'h6'})`
    font-size: ${themeGet('fontSizes.1')};
    color: ${themeGet('colors.gray.5')};
  `,
  wrap(as) {
    return props => <Headings.Markdown as={Headings[as]} {...props} />
  },
}

export const H1 = Headings.wrap('h1')
export const H2 = Headings.wrap('h2')
export const H3 = Headings.wrap('h3')
export const H4 = Headings.wrap('h4')
export const H5 = Headings.wrap('h5')
export const H6 = Headings.wrap('h6')

export const Blockquote = styled.blockquote`
  margin: 0 0 ${themeGet('space.3')};
  padding: 0 ${themeGet('space.3')};
  color: ${themeGet('colors.gray.5')};
  border-left: 0.25em solid ${themeGet('colors.gray.2')};

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`

export const DescriptionList = styled.dl`
  padding: 0;

  dt {
    padding: 0;
    margin-top: ${themeGet('space.3')};
    font-size: 1em;
    font-style: italic;
    font-weight: ${themeGet('fontWeights.bold')};
  }

  dd {
    padding: 0 ${themeGet('space.3')};
    margin: 0 0 ${themeGet('space.3')};
  }
`

export const HorizontalRule = styled.hr`
  height: ${themeGet('space.1')};
  padding: 0;
  margin: ${themeGet('space.4')} 0;
  background-color: ${themeGet('colors.gray.2')};
  border: 0;
`

export const Image = styled.img`
  max-width: 100%;
  box-sizing: content-box;
  background-color: ${themeGet('colors.white')};
`

export const InlineCode = styled.code`
  padding: 0.2em 0.4em;
  font-family: ${themeGet('fonts.mono')};
  font-size: 85%;
  background-color: ${themeGet('colors.gray.1')};
  border-radius: ${themeGet('radii.1')};
`

export const UnorderedList = styled.ul`
  padding-left: 2em;

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    word-wrap: break-all;
  }

  li > p {
    margin-top: ${themeGet('space.3')};
  }

  li + li {
    margin-top: ${themeGet('space.1')};
  }
`

export const OrderedList = UnorderedList.withComponent('ol')

export const Paragraph = styled.p`
  margin: 0 0 ${themeGet('space.3')};
`

export const Table = styled.table`
  display: block;
  width: 100%;
  margin: 0 0 ${themeGet('space.3')};
  overflow: auto;

  th {
    font-weight: ${themeGet('fontWeights.bold')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border: 1px solid ${themeGet('colors.gray.2')};
  }

  tr {
    background-color: ${themeGet('colors.white')};
    border-top: 1px solid ${themeGet('colors.gray.2')};

    &:nth-child(2n) {
      background-color: ${themeGet('colors.gray.1')};
    }
  }

  img {
    background-color: transparent;
  }
`

export const Note = ({children}) => (
  <Box
    sx={{
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 0,
      borderColor: 'blue.1',
      backgroundColor: 'blue.0',
      px: 3,
      py: 2,
      my: 4,
    }}
  >
    {React.Children.toArray(children).map((child, index, list) =>
      React.cloneElement(child, {
        style: index === list.length - 1 ? {marginBottom: '0'} : null,
      }),
    )}
  </Box>
)

export const Prompt = ({children}) => (
  <Box
    as="pre"
    sx={{
      mt: 0,
      mb: 3,
      p: 3,
      border: 0,
      color: 'rgb(57, 58, 52)',
      backgroundColor: 'rgb(246, 248, 250)',
      overflow: 'auto',
    }}
  >
    <Text sx={{fontFamily: 'mono', fontSize: 1}}>{children}</Text>
  </Box>
)

export const PromptReply = ({children}) => <strong>{children}</strong>

export const Screenshot = props => (
  <div>
    <img
      src={withPrefix(required(props.src, 'src'))}
      alt={required(props.alt, 'alt')}
      style={{
        border: 'solid 1px #999999',
        marginTop: '15px',
        maxWidth: 'min(100%, 525px)',
        maxHeight: '300px',
      }}
    />
  </div>
)
