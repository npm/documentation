import { Flex, Grid, Text, StyledOcticon } from '@primer/components'
import { CheckIcon, XIcon } from '@primer/octicons-react'
import React from 'react'
import Caption from './caption'

export function DoDontContainer ({ stacked, children }) {
  return (
    <Grid
      gridTemplateColumns={['1fr', null, stacked ? '1fr' : '1fr 1fr']}
      gridGap={3}
      mb={3}
    >
      {children}
    </Grid>
  )
}

DoDontContainer.defaultProps = {
  stacked: false,
}

export function Do (props) {
  return <DoDontBase {...props} text="Do" icon={CheckIcon} iconBg="green.5" />
}

export function Dont (props) {
  return <DoDontBase {...props} text="Don't" icon={XIcon} iconBg="red.5" />
}

function DoDontBase ({ src, alt, children, text, icon: Icon, iconBg }) {
  return (
    <Flex flexDirection="column">
      <Flex alignSelf="start" flexDirection="row" alignItems="center" mb="2">
        <Flex bg={iconBg} color="white" p={1} style={{ borderRadius: '50%' }}>
          <StyledOcticon icon={Icon} verticalAlign="middle" size={12} />
        </Flex>
        <Text fontWeight="bold" color="gray.9" ml={2}>
          {text}
        </Text>
      </Flex>
      <img src={src} alt={alt} width="100%" />
      <Caption mb={0}>{children}</Caption>
    </Flex>
  )
}

DoDontBase.defaultProps = {
  alt: '',
}
