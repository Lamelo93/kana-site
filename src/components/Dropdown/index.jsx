//COMPOSANT DROPDOWN (PAGE A PROPOS ET PAGE LOGEMENT/FICHE)

import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import arrow from '../../assets/Icones/arrow-down.png'

const DropdownWrapper = styled.li`
  list-style-type: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  flex-wrap: wrap;
  width: 100%;
  background-color: #ff6060;
  border-radius: 5px;
  height: 30px;
  @media screen and (min-width: 768px) {
    height: 47px;
  }
`

const DropdownTitle = styled.h2`
  font-family: Montserrat;
  color: white;
  font-size: 13px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const DropdownButton = styled.img`
  max-width: 16px;
  transition: transform 0.3s ease;
  cursor: pointer;
  /*La flèche pivote lorsque le menu s'ouvre*/
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}

  @media screen and (min-width: 768px) {
    max-width: 32px;
  }
`

const DropdownContent = styled.p`
  background-color: #f6f6f6;
  color: #ff6060;
  width: 100%;
  font-family: Montserrat;
  font-size: 12px;
  padding: 20px;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const CollapseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false) //Le menu dropdown est fermé par défaut

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  } //Change la valeur de isOpen entre true et false

  return (
    <CollapseWrapper>
      <DropdownWrapper onClick={toggleDropdown}>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownButton src={arrow} alt="collapse-content" isOpen={isOpen} />
      </DropdownWrapper>

      {isOpen && <DropdownContent>{content}</DropdownContent>}
    </CollapseWrapper>
  )
}

export default Dropdown
