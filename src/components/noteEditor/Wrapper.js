import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 16px;
  margin: 16px auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    margin: 6px auto;
  }
`

export default Wrapper
