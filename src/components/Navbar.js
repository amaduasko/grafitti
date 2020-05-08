import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo.png'
import tel from '../images/tel.png'
import basket from '../images/basket.png'
import Button from './Button'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'

const Logo = styled.img``

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 100px;
  color: #1d354a;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0 1rem;
  &:hover {
    text-decoration: none;
    color: #f7087a;
  }
`
const CallBackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
`
const CallBackInfo = styled.div`
  margin-left: 1rem;
  margin-right: 2rem;
  @media only screen and (max-width: 1199px) and (min-width: 1024px) {
    margin-right: 0;
  }
`

const PhoneIconContainer = styled.div`
  margin-left: 3rem;
  @media only screen and (max-width: 1199px) and (min-width: 1024px) {
    margin-left: 0;
  }
  @media only screen and (max-width: 340px) {
    margin-left: 0;
  }
`

const PhoneIcon = styled.a`
  display: flex;
`

const PhoneNumber = styled.a`
  color: #f7087a;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  &:hover {
    color: #f7087a;
    text-decoration: none;
  }
  @media only screen and (max-width: 1199px) and (min-width: 1024px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 576px) {
    font-size: 15px;
  }
`

const CallBackInfoText = styled.span`
  display: block;
  color: #bababa;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
`

const ShoppingBasket = styled.div`
  display: flex;
  margin-left: auto;
`
const BasketContainer = styled.div`
  display: flex;
  height: 30px;
  align-self: flex-end;
`
const BasketToolTip = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 18px;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  color: #fff;
  background-color: #f7087a;
  border-radius: 9px;
  position: relative;
  top: 15px;
  right: 5px;v
`

const NavBrand = styled(NavbarBrand)`
  @media only screen and (max-width: 340px) {
    width: 150px;
  }
`

const Btn = styled(Button)`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const Basket = styled.img``

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const ativeStyle = {
    borderBottom: '5px solid #f7087a',
    paddingTop: '5px',
  }

  const itemCount = 0

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Navbar dark expand='lg' className='p-0 '>
        <NavBrand href='/'>
          {' '}
          <Logo src={logo} style={{ width: '100%' }} alt='logo' />{' '}
        </NavBrand>
        <NavbarToggler
          style={{ backgroundColor: '#f7087a' }}
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link exact to='/' activeStyle={ativeStyle}>
                Главная
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/ship' activeStyle={ativeStyle}>
                Доска
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact' activeStyle={ativeStyle}>
                Контакты
              </Link>
            </NavItem>
          </Nav>
          <Nav className='ml-auto flex-nowrap'>
            <Btn>Заказать</Btn>
            <CallBackContainer>
              <PhoneIconContainer>
                <PhoneIcon href='tel:8800707531'>
                  <img src={tel} alt='tel' />
                </PhoneIcon>
              </PhoneIconContainer>
              <CallBackInfo>
                <CallBackInfoText>Звоните сейчас!</CallBackInfoText>
                <PhoneNumber href='tel:8800707531'>8 800 70 75 31</PhoneNumber>
              </CallBackInfo>
            </CallBackContainer>
            <ShoppingBasket>
              <BasketContainer>
                <Basket src={basket} alt='basket' />
              </BasketContainer>
              <BasketToolTip>{itemCount}</BasketToolTip>
            </ShoppingBasket>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default NavBarComponent
