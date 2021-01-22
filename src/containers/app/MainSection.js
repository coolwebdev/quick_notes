import styled from 'styled-components'

const marginBottom = 'calc(6em + 1.5em + 1px + 26px)'
const marginBottomMobile = 'calc(3em + 3em + 1px + 16px)'

const MainSection = styled.div`
  padding-bottom: ${marginBottom};

  @media (max-width: 576px) {
    padding-bottom: ${marginBottomMobile};
  }
`

export default MainSection
