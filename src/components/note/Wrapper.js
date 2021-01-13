import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 200px;
  height: auto;
  //float: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  padding: 10px;
  margin: 10px 10px 0;
  transition: box-shadow 0.3s;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: rgb(255, 255, 0);

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  span {
    position: absolute;
    line-height: .6em;
    top: 5px;
    right: 5px;
    display: none;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  :hover span {
    display: block;
  }

`

export default Wrapper
