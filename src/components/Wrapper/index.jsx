//COMPOSANT WRAPPER (TOUTES LES PAGES)
import React from 'react'
import '../../utils/scss/Layout/_PageWrapperStyles.scss'

const PageWrapper = ({ children }) => {
  //J'utilise {children} pour afficher le contenu que je rajoute dans mon routeur
  return <div className="page-wrapper">{children}</div>
}

export default PageWrapper
