//PAGE D'ACCUEIL

import React from 'react'
import BannerImage from '../../assets/images/img-home.png'
import Banner from '../../components/Banner'
import styled from 'styled-components'
import Card from '../../components/Card'
import { logementsList } from '../../datas/logements'
import { Link } from 'react-router-dom'

const HomeWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin-top: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 70px auto 0 auto;
  }
`

const HomeTitle = styled.h1`
  font-size: 24px;

  font-family: Montserrat;
  max-width: 217px;
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  text-align: start;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    font-size: 48px;
    line-height: 68px;
    text-align: center;
  }
`

const ListItem = styled(Link)``

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    border-radius: 25px;
    gap: 50px;
    padding: 50px 50px 50px 50px;
  }
`

const Home = () => {
  //J'utilise la méthode map pour générer dynamiquement les cartes logement
  return (
    <HomeWrapper>
      <Banner image={BannerImage}>
        <HomeTitle>Chez vous, partout et ailleurs</HomeTitle>
      </Banner>
      <HomeSection>
        {logementsList.map((logement) => (
          <ListItem to={`/fiche/${logement.id}`} key={logement.id}>
            <Card
              id={logement.id}
              image={logement.cover}
              title={logement.title}
            />
          </ListItem>
        ))}
      </HomeSection>
    </HomeWrapper>
  )
}

export default Home
