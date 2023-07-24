//COMPOSANT BANNIERE (PAGE D'ACCUEIL ET PAGE A PROPOS)
import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../utils/scss/Components/_BannerStyles.scss'

const Banner = ({ image, children }) => {
  const location = useLocation() //useLocation permet de vérifier l'url actif
  const isActive = (pathname) => {
    return location.pathname === pathname ? true : false
  }
  return (
    <div
      className={`banner ${isActive('/about') ? 'banner--about' : ''}`}
      style={{ '--banner-image': `url(${image})` }}
    >
      {children}
    </div>
  )
}

export default Banner
