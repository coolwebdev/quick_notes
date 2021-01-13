import styled from 'styled-components'

const Button = styled.button`
  align-self: flex-end;
  width: 100px;
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 8px;
  text-transform: uppercase;
  text-decoration: none;
  text-shadow: 0 1px 0 #2f6627;

  :hover {
    background-color: #5cbf2a;
  }

  :active {
    position: relative;
    top: 1px;
  }

  :focus {
    outline: 0;
  }
`

export default Button
