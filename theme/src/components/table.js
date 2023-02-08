import styled from 'styled-components'
import {themeGet} from '@styled-system/theme-get'

const Table = styled.table`
  display: block;
  width: 100%;
  margin: 0 0 ${themeGet('space.3')};
  overflow: auto;

  th {
    font-weight: ${themeGet('fontWeights.bold')};
  }

  th,
  td {
    padding: ${themeGet('space.2')} ${themeGet('space.3')};
    border: 1px solid ${themeGet('colors.gray.2')};
  }

  tr {
    background-color: ${themeGet('colors.white')};
    border-top: 1px solid ${themeGet('colors.gray.2')};

    &:nth-child(2n) {
      background-color: ${themeGet('colors.gray.1')};
    }
  }

  img {
    background-color: transparent;
  }
`

export default Table
