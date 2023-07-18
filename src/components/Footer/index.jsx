//COMPOSANT FOOTER (TOUTES LES PAGES)

import React from 'react'
import logofooter from '../../assets/logo/logo-footer.png'
import '../../utils/scss/Layout/_footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="logo-footer" src={logofooter} alt="Kasa-logo" />
      <p className="text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
