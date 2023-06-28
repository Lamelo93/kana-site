import React from 'react'
import styled from 'styled-components'
import starInactive from '../../assets/Icones/star-inactive.png'
import starActive from '../../assets/Icones/star-active.png'

const Ratings = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 196px;
  height: 36px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    height: 36px;
    width: 36px;
  }
`

const Starsimg = styled.img`
  height: 18px;
  width: 18px;
  @media screen and (min-width: 768px) {
    height: 36px;
    width: 36px;
  }
`

const StarsRating = ({ rating }) => {
  return (
    //On crée un array d'images basé(from) sur la valeur de rating
    <Ratings>
      {Array.from({ length: rating }, (_, index) => (
        <Starsimg key={index} src={starActive} alt="star-active" />
      ))}
      {/*_ est utilisé car on a besoin que de l'index pour montrer qu'aucune autre valeur n'est utilisée*/}
      {Array.from({ length: 5 - rating }, (_, index) => (
        <Starsimg key={index} src={starInactive} alt="star-inactive" />
      ))}
    </Ratings>
  )
}

export default StarsRating
