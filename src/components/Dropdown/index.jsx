//COMPOSANT DROPDOWN (PAGE A PROPOS ET PAGE LOGEMENT/FICHE)

import React, { useState } from 'react'
import arrow from '../../assets/Icones/arrow-down.png'
import '../../utils/scss/Components/_DropdownStyles.scss'

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false) //Le menu dropdown est fermé par défaut

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  } //Change la valeur de isOpen entre true et false

  return (
    <div className={`collapse-wrapper ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-wrapper" onClick={toggleDropdown}>
        <h2 className="dropdown-title">{title}</h2>
        <img
          className={`dropdown-button ${isOpen ? 'open' : ''}`}
          src={arrow}
          alt="collapse-content"
        />
      </div>

      {isOpen && <p className="dropdown-content">{content}</p>}
    </div>
  )
}

export default Dropdown
