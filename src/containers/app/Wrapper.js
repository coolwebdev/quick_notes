import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;

  @media (min-width: 544px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    //max-width: 940px;
    max-width: 880px;
  }

  //@media (min-width: 1200px) {
  //  max-width: 1140px;
  //}
`

export default Wrapper
