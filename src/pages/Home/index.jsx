//PAGE D'ACCUEIL

import React from 'react'
import BannerImage from '../../assets/images/img-home.png'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import '../../utils/scss/Pages/_Homepage.scss'
import logementsList from '../../datas/logements.json'
import { Link } from 'react-router-dom'

const Home = () => {
  //J'utilise la méthode map pour générer dynamiquement les cartes logement
  return (
    <main className="home-wrapper">
      <Banner image={BannerImage}>
        <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <section className="home-section">
        {logementsList.map((logement) => (
          <Link
            to={`/fiche/${logement.id}`}
            key={logement.id}
            className="list-item"
          >
            <Card
              id={logement.id}
              image={logement.cover}
              title={logement.title}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Home
