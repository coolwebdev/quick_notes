import styled from 'styled-components'

const AppHeader = styled.header`
  text-align: center;
  font-weight: 500;
  color: grey;
  text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
  padding-top: 16px;

  @media (max-width: 576px) {
    margin-top: 6px;
  }
`

export default AppHeader
