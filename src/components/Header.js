import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVk,
  faFacebookF,
  faOdnoklassniki,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const SelectBar = styled.select`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const HeaderSelect = ({ children }) => (
  <SelectBar>
    <option style={{ backgroundColor: '#b1b1b1' }}>Санкт-Петербург</option>
    <option style={{ backgroundColor: '#b1b1b1' }}>Москва</option>
    <option style={{ backgroundColor: '#b1b1b1' }}>Сочи</option>
    <option style={{ backgroundColor: '#b1b1b1' }}>Казан</option>
  </SelectBar>
)

const HeaderSocial = styled.div`
  display: flex;
`

const HeaderContact = styled.div``

const SocialInfoContainer = styled(Col)`
  justify-content: flex-end;
`
const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 1rem;
  margin-left: 1rem;
  &:hover {
    color: #f7087a;
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 340px) {
    margin-right: 0;
  }
`
const HeaderEmail = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-right: 1rem;
  margin-left: 1rem;
  &:hover {
    color: #f7087a;
    text-decoration: none;
  }
  @media only screen and (max-width: 576px) {
    display: none;
  }
`
const HeaderInfo = styled.div`
  background-color: #b1b1b1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`

const Header = ({ children }) => (
  <div>
    <HeaderInfo>
      <Container>
        <Row className='ml-0 mr-0'>
          <Col className='pl-0'>
            {' '}
            <HeaderSelect />
          </Col>
          <SocialInfoContainer className='d-flex pr-0 '>
            <HeaderEmail href='mailto:zakaz@печатьнахолсте.рф'>
              zakaz@печатьнахолсте.рф
            </HeaderEmail>
            <HeaderSocial>
              <SocialIcon target='_blank' href='http://www.vk.com'>
                <FontAwesomeIcon icon={faVk} />
              </SocialIcon>
              <SocialIcon target='_blank' href='http://www.facebook.com'>
                {' '}
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon target='_blank' href='http://www.odnoklasnik.ru'>
                {' '}
                <FontAwesomeIcon icon={faOdnoklassniki} />
              </SocialIcon>
              <SocialIcon target='_blank' href='http://www.intagram.com'>
                {' '}
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
            </HeaderSocial>
          </SocialInfoContainer>
        </Row>
      </Container>
    </HeaderInfo>
    {children}
  </div>
)

export default Header

export { Header, HeaderSelect, HeaderContact, HeaderSocial, HeaderInfo }
