//COMPOSANT CARTE (PAGE D'ACCUEIL)

import React from 'react'
import '../../utils/scss/Components/_CardStyles.scss'

const Card = ({ image, title }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt={title} />
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  )
}

export default Card
