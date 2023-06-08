import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  position: relative;
  padding: 20px;
  padding-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`

const Logo = styled.div`
  height: 47px;
  width: 145px;

  @media screen and (min-width: 768px) {
    height: 68px;
    width: 211px;
  }
`
const LogoImg = styled.img`
  max-width: 100%;
`
const Nav = styled.nav`
  left: 75.08%;
  right: 0%;
  top: 25%;
  bottom: 25%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`

const StyledLink = styled(Link)`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 500;
  color: #ff6060;

  text-align: right;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <LogoImg src={logo} alt="Kana-logo" />
      </Logo>
      <Nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
