import React from 'react'
import { Row } from 'reactstrap'
import styled from 'styled-components'
import a from '../../images/06.png'
import b from '../../images/a595b9.png'
import c from '../../images/b-12b.png'
import d from '../../images/d.png'
import e from '../../images/eeee.png'
import f from '../../images/foto.png'
import g from '../../images/hd.png'
import zoom from '../../images/zoom.png'
import './Footer.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'

const FooterContainer = styled.footer`
  width: 100%;
`

const SliderItemContainer = styled.div`
  display: flex;
  position: relative;
`

const SliderBg = styled.img``

const SliderItemHover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(118, 195, 209, 0.65);
`
const SliderContainer = styled(Row)`
  flex-wrap: nowrap;
`

const SliderItem = ({ img }) => (
  <SliderItemContainer className='slider-item-container'>
    <SliderBg src={img} alt='slider image' />
    <SliderItemHover className='slider-item-hover'>
      <button>
        <img src={zoom} alt='zoom' />
      </button>
    </SliderItemHover>
  </SliderItemContainer>
)

const Slider = ({ children }) => (
  <SliderContainer className='ml-0 mr-0'>{children}</SliderContainer>
)

const Footer = () => {
  return (
    <PerfectScrollbar>
      <FooterContainer>
        <Slider>
          <SliderItem img={a} />
          <SliderItem img={b} />
          <SliderItem img={c} />
          <SliderItem img={d} />
          <SliderItem img={e} />
          <SliderItem img={f} />
          <SliderItem img={g} />
          <SliderItem img={a} />
          <SliderItem img={b} />
          <SliderItem img={c} />
          <SliderItem img={d} />
          <SliderItem img={e} />
          <SliderItem img={f} />
          <SliderItem img={g} />
        </Slider>
      </FooterContainer>
    </PerfectScrollbar>
  )
}

export default Footer
