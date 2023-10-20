import {render} from '@testing-library/react'
import React from 'react'
import PageFooterComponent from '../page-footer'
import {PageProvider} from '../../hooks/use-page'

const PageFooter = pageContext => (
  <PageProvider value={{pageContext}}>
    <PageFooterComponent />
  </PageProvider>
)

test('renders correctly when editUrl and contributors are defined', () => {
  const {queryByText} = render(<PageFooter editUrl="#" contributors={['broccolini']} />)

  expect(queryByText(/Edit this page on GitHub/)).toBeInTheDocument()
  expect(queryByText(/contributor/)).toBeInTheDocument()
})

test('renders correctly when editUrl and contributors are undefined', () => {
  const {queryByText} = render(<PageFooter />)

  expect(queryByText(/Edit this page on GitHub/)).toBeNull()
  expect(queryByText(/contributor/)).toBeNull()
})

test('renders correctly when editUrl is defined but contributors is undefined', () => {
  const {queryByText} = render(<PageFooter editUrl="#" />)

  expect(queryByText(/Edit this page on GitHub/)).toBeInTheDocument()
  expect(queryByText(/contributor/)).toBeNull()
})

test('renders correctly when contributors is defined but editUrl is undefined', () => {
  const {queryByText} = render(<PageFooter contributors={['broccolini']} />)

  expect(queryByText(/Edit this page on GitHub/)).toBeNull()
  expect(queryByText(/contributor/)).toBeInTheDocument()
})

test('does not render contributors if contributors is an empty array', () => {
  const {queryByText} = render(<PageFooter contributors={[]} />)

  expect(queryByText(/contributor/)).toBeNull()
})
