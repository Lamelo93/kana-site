//PAGE A PROPOS

import React from 'react'
import BannerImage from '../assets/images/img-about.png'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import '../utils/scss/Pages/_About.scss'
import AboutContent from '../datas/About.json'

const About = () => {
  //J'utilise la méthode map pour générer les menus dropdowns dynamiquement
  return (
    <main className="about-wrapper">
      <Banner image={BannerImage}></Banner>
      <section className="about-section">
        {AboutContent.map((menu, index) => (
          <Dropdown key={index} title={menu.title} content={menu.content} />
        ))}
      </section>
    </main>
  )
}

export default About
