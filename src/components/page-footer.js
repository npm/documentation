import React from 'react'
import {Box, Avatar, Text} from '@primer/react'
import {Octicon} from '@primer/react/deprecated'
import {Tooltip} from '@primer/react/next'
import {PencilIcon} from '@primer/octicons-react'
import Link from './link'
import usePage from '../hooks/use-page'

import * as styles from './page-footer.module.css'

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

const Contributors = ({contributors = [], latestCommit}) => {
  if (!contributors.length) {
    return null
  }

  return (
    <>
      <Box className={styles.Box}>
        <Text className={styles.Text}>
          {contributors.length} {pluralize('contributor', contributors.length)}
        </Text>
        {contributors.map(login => (
          <Tooltip key={login} text={login}>
            <Link href={`https://github.com/${login}`} className={styles.Link}>
              <Avatar src={`https://github.com/${login}.png?size=40`} alt={login} />
            </Link>
          </Tooltip>
        ))}
      </Box>
      {latestCommit ? (
        <Text className={styles.Text_1}>
          Last edited by{' '}
          <Link href={`https://github.com/${latestCommit.login}`} showUnderline={true}>
            {latestCommit.login}
          </Link>{' '}
          on{' '}
          <Link href={latestCommit.url} showUnderline={true}>
            {format(new Date(latestCommit.date))}
          </Link>
        </Text>
      ) : null}
    </>
  )
}

const PageFooter = () => {
  const {editUrl, latestCommit, contributors = []} = usePage().pageContext

  if (!editUrl && !contributors.length) {
    return null
  }

  return (
    <Box className={styles.Box_1}>
      <Box className={styles.Box_2}>
        {editUrl ? (
          <Link href={editUrl}>
            <Octicon icon={PencilIcon} className={styles.Text} />
            Edit this page on GitHub
          </Link>
        ) : null}
        <Contributors contributors={contributors} latestCommit={latestCommit} />
      </Box>
    </Box>
  )
}

export default PageFooter
