//PAGE D'ERREUR 404

import React from 'react'
import '../utils/scss/Pages/_Error.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="error-wrapper">
      <div className="error-number">404</div>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="home-return">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

export default Error
