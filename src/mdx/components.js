import React from 'react'
import {Heading} from '@primer/react'
import {Octicon} from '@primer/react/deprecated'
import styled from 'styled-components'
import {variant as styledVariant} from 'styled-system'
import {LinkIcon} from '@primer/octicons-react'
import textContent from 'react-addons-text-content'
import {SCROLL_MARGIN_TOP} from '../constants'
import usePage from '../hooks/use-page'
import SiteLink, {LinkNoUnderline} from '../components/link'
import Code from './code'

import * as styles from './components.module.css'

import {clsx} from 'clsx'

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
  margin-top: 24px;
  margin-bottom: 16px;
  scroll-margin-top: ${SCROLL_MARGIN_TOP}px;
  line-height: 1.25;

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
    <LinkNoUnderline {...props} className={styles.LinkNoUnderline}>
      {children}
      <Octicon icon={LinkIcon} className={clsx('octicon-link', styles.Octicon)} />
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
    padding-bottom: 8px;
    font-size: 32px;
    border-bottom: 1px solid var(--borderColor-default);
    margin-top: 0;
  `,
  h2: styled(StyledHeading).attrs({as: 'h2'})`
    padding-bottom: 8px;
    font-size: 20px;
    border-bottom: 1px solid var(--borderColor-default);
    font-weight: 600;
  `,
  h3: styled(StyledHeading).attrs({as: 'h3'})`
    font-size: 16px;
    font-weight: 600;
  `,
  h4: styled(StyledHeading).attrs({as: 'h4'})`
    font-size: 14px;
    font-weight: 600;
  `,
  h5: styled(StyledHeading).attrs({as: 'h5'})`
    font-size: 12px;
  `,
  h6: styled(StyledHeading).attrs({as: 'h6'})`
    font-size: 12px;
    color: var(--fgColor-muted);
  `,
  wrap(as) {
    return props => <Headings.Markdown as={Headings[as]} {...props} />
  },
}

export const H1 = Headings.wrap('h1')
export const H2 = Headings.wrap('h2')
export const H3 = Headings.wrap('h2')
export const H4 = Headings.wrap('h3')
export const H5 = Headings.wrap('h4')
export const H6 = Headings.wrap('h5')

export const Blockquote = styled.blockquote`
  margin: 0 0 16px;
  padding: 0 16px;
  color: var(--fgColor-muted);
  border-left: 0.25em solid var(--borderColor-default);

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
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  dd {
    padding: 0 16px;
    margin: 0 0 16px;
  }
`

export const HorizontalRule = styled.hr`
  height: 1px;
  padding: 0;
  margin: 24px 0;
  background-color: var(--borderColor-default);
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
    word-break: break-word;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 4px;
  }
`

export const OrderedList = UnorderedList.withComponent('ol')

export const Paragraph = styled.p`
  margin: 0 0 16px;
  word-break: break-word;
`

export const Table = styled.table`
  display: block;
  width: 100%;
  margin: 0 0 16px;
  overflow: auto;
  border-collapse: separate;
  border-spacing: 0px;

  th {
    font-weight: 600;
    background-color: var(--bgColor-neutral-subtle);
  }

  th,
  td {
    padding: 8px 16px;
    border-color: var(--borderColor-muted);
    border-style: solid;
    border-width: 0;
    border-left-width: 1px;
    border-top-width: 1px;
  }

  tr:last-child td {
    border-bottom-width: 1px;
  }

  tr td:last-child,
  tr th:last-child {
    border-right-width: 1px;
  }

  thead th:first-child {
    border-top-left-radius: 6px;
  }

  thead th:last-child {
    border-top-right-radius: 6px;
  }

  tbody tr:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }

  tbody tr:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  img {
    background-color: transparent;
    vertical-align: middle;
  }
`

const StyledNote = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 6px;
  border-left: 6px solid;

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
  margin-top: 16px;
  margin-bottom: 16px;
  max-width: min(100%, 525px);
  max-height: 300px;
  border: 1px solid var(--borderColor-default);
  display: block;
`

export const YouTube = ({id}) => (
  <iframe
    title="YouTube video"
    src={`https://www.youtube.com/embed/${id}`}
    frameBorder="0"
    allowFullScreen
    className={styles.Box}
  />
)
