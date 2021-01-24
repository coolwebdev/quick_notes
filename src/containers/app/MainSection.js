import styled from 'styled-components'

const paddingBottom = 'calc(4em + 1.5em + 1px + 26px)'
const paddingBottomMobile = 'calc(3em + 3em + 1px + 16px)'

const MainSection = styled.div`
  padding-bottom: ${paddingBottom};

  @media (max-width: 576px) {
    padding-bottom: ${paddingBottomMobile};
  }
`

export default MainSection
