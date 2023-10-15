import React from 'react'
import {Box, StyledOcticon, Link} from '@primer/react'
import {PencilIcon} from '@primer/octicons-react'
import Contributors from './contributors'
import BorderBox from './border-box'

function PageFooter({editUrl, contributors = {}}) {
  const {logins = [], latestCommit} = contributors
  return editUrl || logins.length ? (
    <BorderBox borderWidth={0} borderTopWidth={1} mt={8} py={5}>
      <Box display="grid" gridGap={4}>
        {editUrl != null ? (
          <Link href={editUrl}>
            <StyledOcticon icon={PencilIcon} mr={2} />
            Edit this page on GitHub
          </Link>
        ) : null}
        {logins.length ? <Contributors logins={logins} latestCommit={latestCommit} /> : null}
      </Box>
    </BorderBox>
  ) : null
}

export default PageFooter
