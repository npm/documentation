import React from 'react'
import {Box, Heading, themeGet, Octicon} from '@primer/react'
import styled from 'styled-components'
import {variant as styledVariant} from 'styled-system'
import {LinkIcon} from '@primer/octicons-react'
import textContent from 'react-addons-text-content'
import {SCROLL_MARGIN_TOP} from '../constants'
import usePage from '../hooks/use-page'
import SiteLink, {LinkNoUnderline} from '../components/link'
import Code from './code'

export {Code}
export {default as Index} from './nav-hierarchy'

const required = (prop, name) => {
  if (!prop) {
    throw new Error(`${name} prop is required`)
  }
  return prop
}

export const Link = props => <SiteLink underline {...props} />

const StyledHeading = styled(Heading)`
  margin-top: ${themeGet('space.4')};
  margin-bottom: ${themeGet('space.3')};
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
  line-height: ${themeGet('lineHeights.condensed')};

  @media (hover: hover) {
    & .octicon-link {
      visibility: hidden;
    }

    &:hover .octicon-link,
    &:focus-within .octicon-link {
      visibility: visible;
    }
  }
`

const HeaderLink = ({autolink, children, ...props}) =>
  autolink ? (
    <LinkNoUnderline {...props} sx={{color: 'inherit'}}>
      {children}
      <Octicon
        icon={LinkIcon}
        className="octicon-link"
        sx={{
          ml: 2,
          color: 'fg.muted',
          // !important is needed here to override default icon styles
          verticalAlign: 'middle !important',
        }}
      />
    </LinkNoUnderline>
  ) : (
    children
  )

const Headings = {
  Markdown: ({children, autolink = true, ...props}) => {
    const childArray = React.Children.toArray(children)
    const childLink =
      React.Children.count(children) > 1 && childArray[0].type?.name === 'Link' ? childArray.shift() : null

    const {slugger} = usePage()
    const text = children ? textContent(children) : ''
    const id = text ? slugger.slug(text) : ''
    const linkProps = {
      autolink,
      'aria-label': `${text} permalink`.trim(),
      ...(id ? {href: `#${id}`} : {}),
    }

    return (
      <StyledHeading {...(autolink && id ? {id} : {})} {...props}>
        {childLink ? (
          <React.Fragment>
            {childLink}
            <HeaderLink {...linkProps}>
              {childArray.map((child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
              ))}
            </HeaderLink>
          </React.Fragment>
        ) : (
          <HeaderLink {...linkProps}>{children}</HeaderLink>
        )}
      </StyledHeading>
    )
  },
  h1: styled(StyledHeading).attrs({as: 'h1'})`
    padding-bottom: ${themeGet('space.2')};
    font-size: ${themeGet('fontSizes.6')};
    border-bottom: 1px solid ${themeGet('colors.border.default')};
    margin-top: 0;
  `,
  h2: styled(StyledHeading).attrs({as: 'h2'})`
    padding-bottom: ${themeGet('space.2')};
    font-size: ${themeGet('fontSizes.4')};
    border-bottom: 1px solid ${themeGet('colors.border.default')};
    font-weight: ${themeGet('fontWeights.semibold')};
  `,
  h3: styled(StyledHeading).attrs({as: 'h3'})`
    font-size: ${themeGet('fontSizes.3')};
    font-weight: ${themeGet('fontWeights.semibold')};
  `,
  h4: styled(StyledHeading).attrs({as: 'h4'})`
    font-size: ${themeGet('fontSizes.2')};
    font-weight: ${themeGet('fontWeights.semibold')};
  `,
  h5: styled(StyledHeading).attrs({as: 'h5'})`
    font-size: ${themeGet('fontSizes.1')};
  `,
  h6: styled(StyledHeading).attrs({as: 'h6'})`
    font-size: ${themeGet('fontSizes.1')};
    color: ${themeGet('colors.fg.muted')};
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
  color: ${themeGet('colors.fg.muted')};
  border-left: 0.25em solid ${themeGet('colors.border.default')};

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
  height: ${themeGet('borderWidths.1')};
  padding: 0;
  margin: ${themeGet('space.4')} 0;
  background-color: ${themeGet('colors.border.default')};
  border: 0;
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
  border-collapse: separate;
  border-spacing: 0px;

  th {
    font-weight: ${themeGet('fontWeights.bold')};
    background-color: ${themeGet('colors.neutral.subtle')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border-color: ${themeGet('colors.border.muted')};
    border-style: solid;
    border-width: 0;
    border-left-width: ${themeGet('borderWidths.1')};
    border-top-width: ${themeGet('borderWidths.1')};
  }

  tr:last-child td {
    border-bottom-width: ${themeGet('borderWidths.1')};
  }

  tr td:last-child,
  tr th:last-child {
    border-right-width: ${themeGet('borderWidths.1')};
  }

  thead th:first-child {
    border-top-left-radius: ${themeGet('radii.2')};
  }

  thead th:last-child {
    border-top-right-radius: ${themeGet('radii.2')};
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${themeGet('radii.2')};
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${themeGet('radii.2')};
  }

  img {
    background-color: transparent;
    vertical-align: middle;
  }
`

const StyledNote = styled.div`
  padding: ${themeGet('space.3')};
  margin-bottom: ${themeGet('space.3')};
  border-radius: ${themeGet('radii.2')};
  border-left: ${themeGet('radii.2')} solid;

  & *:last-child {
    margin-bottom: 0;
  }

  ${styledVariant({
    variants: {
      info: {
        borderColor: 'accent.muted',
        bg: 'accent.subtle',
      },
      warning: {
        borderColor: 'attention.muted',
        bg: 'attention.subtle',
      },
      danger: {
        borderColor: 'danger.muted',
        bg: 'danger.subtle',
      },
    },
  })}
`

export const Note = ({variant = 'info', ...props}) => <StyledNote variant={variant} {...props} />

export const Prompt = props => <Code prompt={true} {...props} />

const RequiredImage = ({src, alt, ...props}) => <img src={required(src, 'src')} alt={required(alt, 'alt')} {...props} />

export const Image = styled(RequiredImage)`
  max-width: 100%;
  box-sizing: content-box;
`

export const Screenshot = styled(RequiredImage)`
  margin-top: ${themeGet('space.3')};
  margin-bottom: ${themeGet('space.3')};
  max-width: min(100%, 525px);
  max-height: 300px;
  border: 1px solid ${themeGet('colors.border.default')};
  display: block;
`

export const YouTube = ({id}) => (
  <Box
    as="iframe"
    sx={{aspectRatio: '16 / 9', width: '100%'}}
    title="YouTube video"
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    allowFullScreen
  />
)
