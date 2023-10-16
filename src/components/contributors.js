import {Box, Avatar, Link, Text, Tooltip} from '@primer/react'
import React from 'react'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const format = d => `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

const pluralize = (word, count) => `${word}${count === 1 ? '' : 's'}`

function Contributors({logins, latestCommit}) {
  return (
    <div>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Text sx={{mr: 2}}>
          {logins.length} {pluralize('contributor', logins.length)}
        </Text>
        {logins.map(login => (
          <Link key={login} href={`https://github.com/${login}`} sx={{lineHeight: 'condensedUltra', mr: 2}}>
            {/* eslint-disable-next-line primer-react/a11y-tooltip-interactive-trigger */}
            <Tooltip key={login} aria-label={login}>
              <Avatar src={`https://github.com/${login}.png?size=40`} alt={login} />
            </Tooltip>
          </Link>
        ))}
      </Box>
      {latestCommit ? (
        <Text sx={{fontSize: 1, color: 'gray.7', mt: 1}}>
          Last edited by <Link href={`https://github.com/${latestCommit.login}`}>{latestCommit.login}</Link> on{' '}
          <Link href={latestCommit.url}>{format(new Date(latestCommit.date))}</Link>
        </Text>
      ) : null}
    </div>
  )
}

export default Contributors
