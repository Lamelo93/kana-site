//ROUTES

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Fiche from '../../pages/Fiche'
import Error from '../../pages/Error'
import Header from '../Header'
import Footer from '../Footer'
import About from '../../pages/About'
import PageWrapper from '../Wrapper'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*
{
    box-sizing: border-box;
    padding: 0;
    margin:0;
}
`

const index = () => {
  //exact element est plus précis et évite les matcch entre une route et plusieurs composants
  return (
    <Router>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/fiche/:id" exact element={<Fiche />} />
          <Route path="/about" exact element={<About />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
        <Footer />
      </PageWrapper>
    </Router>
  )
}

export default index
