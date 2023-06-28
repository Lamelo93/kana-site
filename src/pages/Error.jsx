import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin-top: 10px;
  padding: 20px;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 70px auto 0 auto;
  }
`
const ErrorNumber = styled.div`
  color: #ff6060;
  font-size: 96px;
  font-family: Montserrat;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 288px;
  }
`

const ErrorMessage = styled.p`
  color: #ff6060;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  padding-bottom: 100px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

const HomeReturn = styled(Link)`
  color: #ff6060;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  text-decoration: underline;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 150px 0 150px 0;
  }
`

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorNumber>404</ErrorNumber>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <HomeReturn to="/">Retourner sur la page d'accueil</HomeReturn>
    </ErrorWrapper>
  )
}

export default Error
