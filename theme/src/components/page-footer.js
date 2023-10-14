import {BorderBox, Grid, StyledOcticon, Link} from '@primer/components'
import {PencilIcon} from '@primer/octicons-react'
import React from 'react'
import Contributors from './contributors'

function PageFooter({editUrl, contributors = {}}) {
  const {logins = [], latestCommit} = contributors
  return editUrl || logins.length ? (
    <BorderBox borderWidth={0} borderTopWidth={1} mt={8} py={5}>
      <Grid gridGap={4}>
        {editUrl != null ? (
          <Link href={editUrl}>
            <StyledOcticon icon={PencilIcon} mr={2} />
            Edit this page on GitHub
          </Link>
        ) : null}
        {logins.length ? <Contributors logins={logins} latestCommit={latestCommit} /> : null}
      </Grid>
    </BorderBox>
  ) : null
}

export default PageFooter
