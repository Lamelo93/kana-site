//COMPOSANT BANNIERE (PAGE D'ACCUEIL ET PAGE A PROPOS)
import styled from 'styled-components'

const Banner = styled.div`
  height: 111px;
  width: 100%;

  margin: 0 auto;
  display: flex;
  border-radius: 25px;
  justify-content: left;
  align-items: center;
  text-align: center;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image}); /*L'image de la bannière est passée en props lorsque le composant est utilisé*/
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 223px;
    width: 100%;
    max-width: 1240px;
    font-size: 3em;
    justify-content: center;
  }
`

export default Banner
