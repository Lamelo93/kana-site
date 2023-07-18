//COMPOSANT BANNIERE (PAGE D'ACCUEIL ET PAGE A PROPOS)
import React from 'react'
import '../../utils/scss/Components/_BannerStyles.scss'

const Banner = ({ image, children }) => {
  return (
    <div className="banner" style={{ '--banner-image': `url(${image})` }}>
      {children}
    </div>
  )
}

export default Banner
