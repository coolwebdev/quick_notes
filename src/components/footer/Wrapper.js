import styled from 'styled-components'

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  //left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3em 1em;
  border-top: 1px solid #808080;
  color: grey;

  //section {
  //  padding-left: 1em;
  //  padding-right: 1em;
  //}

  @media (max-width: 576px) {
    padding: 1.5em 0;
    justify-content: center;
  }
`

export default Wrapper
