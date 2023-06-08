import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 340px;
    width: 340px;
  }
`

const CardImage = styled.img`
  height: 255px;
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 340px;
    width: 340px;
    object-fit: cover;
  }
`

const CardTitleContainer = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  position: absolute;
  padding: 0 0 30px 20px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`

const CardTitle = styled.h2`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: white;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

const Card = ({ image, title }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
      </CardTitleContainer>
    </CardContainer>
  )
}

export default Card
