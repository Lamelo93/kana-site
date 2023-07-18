//COMPOSANT RATING (PAGE LOGEMENT/FICHE)

import React from 'react'
import '../../utils/scss/Components/_RatingsStyles.scss'
import starInactive from '../../assets/Icones/star-inactive.png'
import starActive from '../../assets/Icones/star-active.png'

const StarsRating = ({ rating }) => {
  return (
    //On crée un array d'images basé(from) sur la valeur de rating
    <div className="ratings">
      {Array.from({ length: rating }, (_, index) => (
        <img
          key={index}
          className="stars-img"
          src={starActive}
          alt="star-active"
        />
      ))}
      {/*'_'est utilisé car on a besoin que de l'index, et montre qu'aucune autre valeur n'est utilisée*/}
      {Array.from({ length: 5 - rating }, (_, index) => (
        <img
          key={index}
          className="stars-img"
          src={starInactive}
          alt="star-inactive"
        />
      ))}
    </div>
  )
}

export default StarsRating
