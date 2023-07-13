//COMPOSANT WRAPPER (TOUTES LES PAGES)
import styled from 'styled-components'

const PageWrapper = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  box-sizing: border-box;
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-bottom: 209px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

export default PageWrapper
