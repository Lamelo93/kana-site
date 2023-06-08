import React from 'react'
import styled from 'styled-components'
import logofooter from '../../assets/logo/logo-footer.png'

const FooterContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 209px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  color: white;
  bottom: 0;
  position: fixed;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`

const LogoFooter = styled.img`
  height: 40px;
  width: 122px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`

const Text = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <LogoFooter src={logofooter} alt="Kana-logo" />
      <Text>© 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  )
}

export default Footer
