import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import serviceBg from '../../images/service-bg.png'
import _1 from '../../images/1.png'
import _2 from '../../images/2.png'
import _3 from '../../images/3.png'
import _4 from '../../images/4.png'
import './Services.scss'

const ServicesContainer = styled.div`
  height: 705px;
  background-size: cover;
  background-repeat: no-repeat;
`

const ServiceItemContentICon = styled(Col)`
  top: 55px;
  @media only screen and (max-width: 768px) {
    top: 0;
  }
`

const ServiceItem = ({ icon, title, text }) => (
  <Row className='service-item border'>
    <ServiceItemContentICon
      md={2}
      className='d-flex justify-content-center pl-0 pr-0'
    >
      <span>
        <img src={icon} alt=' service icon' />
      </span>
    </ServiceItemContentICon>
    <Col className='service-info'>
      <h3>{title}</h3>
      <p>{text}</p>
    </Col>
  </Row>
)

const ServicesContent = styled(Container)`
  position: relative;
  top: 6rem;
  @media only screen and (max-width: 768px) {
    overflow: auto;
    top: 50%;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
  }
  /* left: calc(100% - 730px); */
`

const Content = styled.div`
  margin-left: auto;
  width: fit-content;
  @media only screen and (max-width: 1024px) {
    margin-left: unset;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
  }
`

const OuterText = styled.p`
  color: #d9d9d9;
  font-size: 28px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 0.28px;
  width: fit-content;
  margin: 0;
  transform: rotate(90deg);
  position: relative;
  left: 90%;
  top: -15.6rem;
  @media only screen and (max-width: 1440px) {
    left: 80%;
  }
  @media only screen and (max-width: 1100px) and (min-width: 1024px) {
    left: 75%;
  }
  @media only screen and (max-width: 1024px) {
    left: 72%;
  }
  @media only screen and (max-width: 990px) {
    left: 60%;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ServiceContentRow = styled(Row)`
  @media only screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
`

const Services = () => {
  return (
    <ServicesContainer style={{ backgroundImage: `url(${serviceBg})` }}>
      <ServicesContent>
        <Content>
          <ServiceContentRow className='ml-0 mr-0 '>
            <ServiceItem
              icon={_1}
              title='Картонный задник'
              text={`Прародителем текста-рыбы является известный " Lorem Ipsum" – латинский текст, ноги которого растут аж из 45 года до нашей эры.`}
            />
            <ServiceItem
              icon={_4}
              title='Воспользуйтесь доставкой'
              text={`Прародителем текста-рыбы является известный "Lorem Ipsum" – латинский текст, ноги которого растут аж из 45 года до нашей эры.`}
            />
          </ServiceContentRow>
          <ServiceContentRow className='ml-0 mr-0'>
            <ServiceItem
              icon={_2}
              title='Холст покрывается лаком'
              text={`Прародителем текста-рыбы является известный "Lorem Ipsum" – латинский текст, ноги которого растут аж из 45 года до нашей эры.`}
            />
            <ServiceItem
              icon={_3}
              title='ЭКО материалы'
              text={`Прародителем текста-рыбы является известный "Lorem Ipsum" – латинский текст, ноги которого растут аж из 45 года до нашей эры.`}
            />
          </ServiceContentRow>
        </Content>
        <OuterText>Печать любимых изобрпжений!</OuterText>
      </ServicesContent>
    </ServicesContainer>
  )
}

export default Services
