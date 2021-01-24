import styled from 'styled-components'

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin: 5px;
  font-size: 16px;
  border: none;
  font-weight: 300;
  font-family: inherit;
  
  ::placeholder {
    opacity: 0.7;
  }

  :focus {
    outline: 0;
  }
`

export default Textarea
