//PAGE A PROPOS

import React from 'react'
import BannerImage from '../assets/images/img-about.png'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import styled from 'styled-components'
import { AboutContent } from '../datas/About'

const AboutWrapper = styled.main`
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin-top: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 70px auto 0 auto;
  }
`

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 25px;

    padding: 50px 50px 50px 50px;
  }
`

const About = () => {
  //J'utilise la méthode map pour générer les menus dropdowns dynamiquement
  return (
    <AboutWrapper>
      <Banner image={BannerImage}></Banner>
      <AboutSection>
        {AboutContent.map((menu, index) => (
          <Dropdown key={index} title={menu.title} content={menu.content} />
        ))}
      </AboutSection>
    </AboutWrapper>
  )
}

export default About
