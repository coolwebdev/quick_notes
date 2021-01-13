import styled from 'styled-components'

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  margin: 5px;
  font-size: 14px;
  border: none;
  font-weight: 300;

  :focus {
    outline: 0;
  }
`

export default Textarea
