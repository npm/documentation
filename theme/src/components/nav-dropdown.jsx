import {Absolute, BorderBox, StyledOcticon, Text, themeGet} from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'
import React from 'react'
import styled from 'styled-components'
import Details from './details'

function NavDropdown({title, children}) {
  return (
    <Details overlay={true}>
      {({toggle}) => (
        <>
          <summary style={{cursor: 'pointer'}} onClick={toggle}>
            <Text>{title}</Text>
            <StyledOcticon icon={ChevronDownIcon} ml={1} />
          </summary>
          <Absolute>
            <BorderBox bg="white" py={1} mt={2} boxShadow="medium" color="gray.8">
              {children}
            </BorderBox>
          </Absolute>
        </>
      )}
    </Details>
  )
}

export const NavDropdownItem = styled.a`
  display: block;
  padding: ${themeGet('space.2')} ${themeGet('space.3')};
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${themeGet('colors.white')};
    background-color: ${themeGet('colors.blue.5')};
    text-decoration: none;
  }
`

export default NavDropdown
