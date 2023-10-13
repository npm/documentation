import {render} from '@testing-library/react'
import React from 'react'
import Contributors from '../contributors'

test('renders contributors', () => {
  const {queryByText} = render(
    <Contributors
      contributors={[
        {
          login: 'colebemis',
          latestCommit: {
            url: '#',
            date: '2019-08-15T23:40:19Z',
          },
        },
        {
          login: 'emplums',
          latestCommit: {
            url: '#',
            date: '2019-08-14T00:19:54Z',
          },
        },
      ]}
    />,
  )

  expect(queryByText(/2 contributors/)).toBeInTheDocument()
  expect(queryByText(/Last edited by/)).toBeInTheDocument()
  expect(queryByText(/colebemis/)).toBeInTheDocument()
  expect(queryByText(/August 15, 2019/)).toBeInTheDocument()
})

test('does not render "last edited by" if latest contributor does not have a latest commit', () => {
  const {queryByText} = render(<Contributors contributors={[{login: 'ashygee'}]} />)

  expect(queryByText(/1 contributor/)).toBeInTheDocument()
  expect(queryByText(/Last edited by/)).toBeNull()
})

// The `Contributors` component is unlikely to be passed an empty array
// but it should be able to handle an empty array gracefully just in case.
test('handles no contributors', () => {
  const {queryByText} = render(<Contributors contributors={[]} />)

  expect(queryByText(/0 contributors/)).toBeInTheDocument()
})

test('does not render duplicate contributors', () => {
  const {queryByText} = render(
    <Contributors
      contributors={[
        {
          login: 'colebemis',
          latestCommit: {
            url: '#',
            date: '2019-08-15T23:40:19Z',
          },
        },
        {
          login: 'colebemis',
          latestCommit: {
            url: '#',
            date: '2019-08-14T00:19:54Z',
          },
        },
      ]}
    />,
  )

  expect(queryByText(/1 contributor/)).toBeInTheDocument()
})
