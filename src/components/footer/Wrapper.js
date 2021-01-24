import styled from 'styled-components'

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2em 0;
  border-top: 1px solid #939597;
  color: #939597;

  @media (max-width: 576px) {
    padding: 1.5em 0;
    justify-content: center;
  }
`

export default Wrapper
