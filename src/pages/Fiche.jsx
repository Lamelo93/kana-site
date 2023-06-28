import React, { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'
import StarsRating from '../components/Ratings'
import { logementsList } from '../datas/logements'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const FicheWrapper = styled.main`
  display: flex;
  flex-direction: column;
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

const BottomWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-top: 15px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0px;
  text-align: left;
`
const LogementTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ff6060;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`
const LogementLocation = styled.h2`
  text-align: left;
  color: #ff6060;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const Host = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`

const HostName = styled.h3`
  display: flex;
  flex-direction: column;
  color: #ff6060;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 500;
  word-wrap: break-word;
  max-width: 93px;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
const HostPicture = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    height: 64px;
    width: 64px;
  }
`
const HostandRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff6060;
  padding: 0 10px 0 10px;
  min-height: 25px;

  border-radius: 10px;
  color: white;
  font-size: 10px;
  font-family: Montserrat;
  font-weight: 400;
  word-wrap: break-word;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    min-width: 115px;
  }
`
const Dropdowns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-wrap: nowrap;
    border-radius: 25px;
    flex-direction: row;
  }
`

const ListItem = styled.li`
  list-style-type: none;
`

const Fiche = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const activeLogement = logementsList.find((logement) => logement.id === id)
  const exists = logementsList.some((logement) => logement.id === id)

  const rating = parseInt(activeLogement.rating)
  useEffect(() => {
    if (!exists) {
      navigate('/notfound')
    }
  }, [exists, navigate]) //UseEffect s'active seulement lorsqu'is a reçu ses dependencies

  //La valeur de exists n'est pas encore déterminée, c'est pourquoi il faut utiliser useEffect au lieu d'utiliser navigate dans le composant directement

  if (!exists) {
    return null
  } else {
    return (
      <FicheWrapper>
        <Carrousel pictures={activeLogement.pictures} />
        <BottomWrapper>
          <div>
            <StyledHeader>
              <LogementTitle>{activeLogement.title}</LogementTitle>
            </StyledHeader>
            <LogementLocation>{activeLogement.location}</LogementLocation>
            <Tags>
              {activeLogement.tags.map((tag, index) => (
                <ListItem key={index}>
                  <Tag>{tag}</Tag>
                </ListItem>
              ))}
            </Tags>
          </div>

          <HostandRating>
            <Host>
              <HostName>{activeLogement.host.name}</HostName>
              <HostPicture src={activeLogement.host.picture} alt="Host" />
            </Host>
            <StarsRating rating={rating} />
          </HostandRating>
        </BottomWrapper>
        <Dropdowns>
          <Dropdown title="Description" content={activeLogement.description} />
          <Dropdown
            title="Équipements"
            content={activeLogement.equipments.map((equipment, index) => (
              <ListItem key={index}>{equipment}</ListItem>
            ))}
          />
        </Dropdowns>
      </FicheWrapper>
    )
  }
}

export default Fiche
