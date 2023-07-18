//PAGE DE LOGEMENT

import React, { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'
import StarsRating from '../components/Ratings'
import { logementsList } from '../datas/logements'
import { useNavigate, useParams } from 'react-router-dom'
import '../utils/scss/Pages/_Fiche.scss'

const Fiche = () => {
  const { id } = useParams() // useParams me permet de récupérer l'id spécifié dans l'url
  const navigate = useNavigate() //useNavigate me permet d'effectuer une redirection vers la page d'erreur en cas de mauvais id
  const activeLogement = logementsList.find((logement) => logement.id === id)
  const exists = logementsList.some((logement) => logement.id === id) // Je vérifie si l'id dans l'url existe dans ma base de données
  const rating = activeLogement ? parseInt(activeLogement.rating) : 0 //Pour récupérer la note, je vérifie que l'id est reconnu

  useEffect(() => {
    if (!exists) {
      navigate('/notfound')
    }
  }, [exists, navigate]) //useEffect s'active seulement lorsqu'is a reçu ses dependencies

  //La valeur de exists n'est pas encore déterminée, c'est pourquoi il faut utiliser useEffect au lieu d'utiliser navigate dans le composant directement

  if (!exists) {
    return null // J'utilise return null pour laisser le temps a useEffect de s'activer ou non
  } else {
    return (
      <main className="fiche-wrapper">
        <Carrousel pictures={activeLogement.pictures} />
        <section className="bottom-wrapper">
          <div>
            <div className="styled-header">
              <h1 className="logement-title">{activeLogement.title}</h1>
            </div>
            <h2 className="logement-location">{activeLogement.location}</h2>
            <div className="tags">
              {activeLogement.tags.map((tag, index) => (
                <li key={index} className="list-item">
                  <div className="tag">{tag}</div>
                </li>
              ))}
            </div>
          </div>
          <div className="host-and-rating">
            <div className="host">
              <h3 className="host-name">{activeLogement.host.name}</h3>
              <img
                className="host-picture"
                src={activeLogement.host.picture}
                alt="Host"
              />
            </div>
            <StarsRating rating={rating} />
          </div>
        </section>
        <div className="dropdowns">
          <Dropdown title="Description" content={activeLogement.description} />
          <Dropdown
            title="Équipements"
            content={activeLogement.equipments.map((equipment, index) => (
              <li key={index} className="list-item">
                {equipment}
              </li>
            ))}
          />
        </div>
      </main>
    )
  }
}

export default Fiche
