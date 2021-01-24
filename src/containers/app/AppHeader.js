import styled from 'styled-components'

const AppHeader = styled.header`
  text-align: center;
  font-weight: 600;
  color: #B55A30;
  text-shadow: 0 2px 3px rgba(255 255 255 / 70%);
  padding-top: 16px;
  font-size: large;

  @media (max-width: 576px) {
    padding-top: 6px;
  }
`

export default AppHeader
