//COMPOSANT CARROUSEL (PAGE LOGEMENT/FICHE)

import React, { useState } from 'react'
import '../../utils/scss/Components/_CarrouselStyles.scss'
import arrow from '../../assets/Icones/arrow-back.png'

const Carrousel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0) //Le carrousel s'affiche sur le premier élément du tableau (0) par défaut

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? pictures.length - 1 : activeIndex - 1) // Si on revient en arrière depuis la première image, on retourne à la dernière
  }

  const handleNext = () => {
    setActiveIndex(activeIndex === pictures.length - 1 ? 0 : activeIndex + 1) // Si on avance d'une image depuis la dernière, on retourne à la première
  }

  return (
    <div
      className="carrousel-container"
      style={{ '--background-image': `url(${pictures[activeIndex]})` }}
    >
      <div className="icons-container">
        <div
          className={`arrow-container ${pictures.length <= 1 ? 'hide' : ''}`}
        >
          {/*Les flèches de navigation n'apparaissent pas s'il n'y a qu'une image*/}
          <button className="arrow-nav" onClick={handlePrev}>
            <img className="arrow-img" src={arrow} alt="previous" />
          </button>
          <button className="arrow-nav" onClick={handleNext}>
            <img
              className="arrow-img arrow-img-forward"
              src={arrow}
              alt="next"
            />
          </button>
        </div>

        <div className="slide-index">
          {activeIndex + 1}/{pictures.length}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
