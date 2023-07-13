//COMPOSANT CARROUSEL (PAGE LOGEMENT/FICHE)

import React, { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/Icones/arrow-back.png'

const CarrouselContainer = styled.div`
  height: 255px;
  width: 100%;
  padding: 0px 12px 0px 12px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  justify-content: center;
  align-items: center;

  color: white;
  background-image: url(${(props) =>
    props.image}); /*L'image de la bannière est passée en props lorsque le composant est utilisé*/
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 415px;
    width: 100%;
    padding: 0px 24px 0px 24px;
    max-width: 1240px;
    font-size: 3em;
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 35%;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    height: 100%;
    object-fit: none;
  }
`

const ArrowContainer = styled.div`
  display: ${(props) =>
    props.slidesNumber <= 1
      ? 'none'
      : 'flex'}; /*Les flèches de navigation n'apparaissent pas s'il n'y a qu'une image*/
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ArrowNav = styled.button`
  max-height: 80px;
  background: transparent;
  border: none;
  cursor: pointer;
`

const Arrowimg = styled.img`
  height: 24px;
  transform: ${(props) => (props.forward ? 'rotate(180deg)' : 'none')};
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 100%;
    object-fit: none;
  }
`

const SlideIndex = styled.div`
  font-family: Montserrat;
  font-size: 25px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 18px;
  }
`

const Carrousel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0) //Le carrousel s'affiche sur le premier élément du tableau (0) par défaut

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? pictures.length - 1 : activeIndex - 1) // Si on revient en arrière depuis la première image, on retourne à la dernière
  }

  const handleNext = () => {
    setActiveIndex(activeIndex === pictures.length - 1 ? 0 : activeIndex + 1) // Si on avance d'une image depuis la dernière, on retourne à la première
  }

  return (
    <CarrouselContainer image={pictures[activeIndex]}>
      <IconsContainer>
        <ArrowContainer slidesNumber={pictures.length}>
          <ArrowNav onClick={handlePrev}>
            <Arrowimg src={arrow} alt="previous" />
          </ArrowNav>

          <ArrowNav onClick={handleNext}>
            <Arrowimg src={arrow} alt="next" forward />
          </ArrowNav>
        </ArrowContainer>

        <SlideIndex>
          {activeIndex + 1}/{pictures.length}
        </SlideIndex>
      </IconsContainer>
    </CarrouselContainer>
  )
}

export default Carrousel
