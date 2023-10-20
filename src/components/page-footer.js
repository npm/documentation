import React from 'react'
import {Box, Octicon} from '@primer/react'
import {PencilIcon} from '@primer/octicons-react'
import Link from './link'
import Contributors from './contributors'

function PageFooter({editUrl, contributors = {}}) {
  const {logins = [], latestCommit} = contributors
  return editUrl || logins.length ? (
    <Box
      sx={{
        borderWidth: 0,
        borderTopWidth: 1,
        borderRadius: 0,
        mt: 8,
        py: 5,
        borderStyle: 'solid',
        borderColor: 'border.default',
      }}
    >
      <Box sx={{display: 'grid', gap: 4}}>
        {editUrl ? (
          <Link href={editUrl}>
            <Octicon icon={PencilIcon} sx={{mr: 2}} />
            Edit this page on GitHub
          </Link>
        ) : null}
        {logins.length ? <Contributors logins={logins} latestCommit={latestCommit} /> : null}
      </Box>
    </Box>
  ) : null
}

export default PageFooter
