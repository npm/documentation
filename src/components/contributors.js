import React from 'react'
import {Box, Avatar, Text, Tooltip} from '@primer/react'
import Link from './link'

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

function Contributors({contributors = [], latestCommit}) {
  return (
    <div>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Text sx={{mr: 2}}>
          {contributors.length} {pluralize('contributor', contributors.length)}
        </Text>
        {contributors.map(login => (
          <Tooltip key={login} aria-label={login}>
            <Link href={`https://github.com/${login}`} sx={{lineHeight: 'condensedUltra', mr: 2}}>
              <Avatar src={`https://github.com/${login}.png?size=40`} alt={login} />
            </Link>
          </Tooltip>
        ))}
      </Box>
      {latestCommit ? (
        <Text sx={{fontSize: 1, color: 'fg.muted', mt: 1}}>
          Last edited by <Link href={`https://github.com/${latestCommit.login}`}>{latestCommit.login}</Link> on{' '}
          <Link href={latestCommit.url}>{format(new Date(latestCommit.date))}</Link>
        </Text>
      ) : null}
    </div>
  )
}

export default Contributors
