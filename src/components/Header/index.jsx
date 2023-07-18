//COMPOSANT HEADER (TOUTES LES PAGES)

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import '../../utils/scss/Layout/_header.scss'

const Header = () => {
  const location = useLocation() //useLocation permet de vérifier l'url actif
  const isActive = (pathname) => {
    return location.pathname === pathname ? true : false
  }

  //La valeur de la CONST isActive permet de donner la CLASSE isactive au lien
  return (
    <header className="header-wrapper">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Kasa-logo" />
      </div>
      <nav className="nav">
        <Link to="/" className={`styled-link ${isActive('/') ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link
          to="/about"
          className={`styled-link ${isActive('/about') ? 'active' : ''}`}
        >
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
