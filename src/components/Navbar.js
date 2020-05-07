import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
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
  NavLink,
} from 'reactstrap'

const Logo = styled.img``

const Link = styled(NavLink)`
  color: #1d354a !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
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
`

const PhoneIconContainer = styled.div`
  margin-left: 3rem;
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

const Basket = styled.img``

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const itemCount = 0

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Navbar dark expand='md'>
        <NavbarBrand href='/'>
          {' '}
          <Logo src={logo} alt='logo' />{' '}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link href='/'>Главная</Link>
            </NavItem>
            <NavItem>
              <Link href='/'>Доска</Link>
            </NavItem>
            <NavItem>
              <Link href='/'>Контакты</Link>
            </NavItem>
          </Nav>
          <Nav className='ml-auto'>
            <Button>Заказать</Button>
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
