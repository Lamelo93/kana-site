import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Fiche from '../../pages/Fiche'
import Apropos from '../../pages/Apropos'
import Error from '../../pages/Error'
import Header from '../Header'
import Footer from '../Footer'

const index = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fiche" exact element={<Fiche />} />
        <Route path="/apropos" exact element={<Apropos />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default index
