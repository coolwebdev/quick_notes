import styled from 'styled-components'

const Button = styled.button`
  align-self: flex-end;
  width: 100px;
  background-color: rgba(0 161 112 / 80%);
  border-radius: 2px;
  border: 1px solid #00A170;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 8px;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    background-color: rgb(0 161 112);
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
