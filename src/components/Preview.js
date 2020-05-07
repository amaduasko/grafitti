import React, { useState, useRef } from 'react'
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCaretDown, faCaretUp, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import previewBg from '../images/2-layers.png'
import fileUploadLogo from '../images/3-layers.png'

import styled from 'styled-components'
import './Preview.scss'

const PreviewContainer = styled.div`
  height: 708px;
  background-size: contain;
  background-repeat: no-repeat;
`

const PreviewContent = styled.div`
  width: 370px
`

const Title = styled.h2`
  color: #9cd9e4;
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: -0.3px;
`
const TitleCaption = styled.h4`
  color: #9cd9e4;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
  letter-spacing: -0.18px;
`
const FigureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`


const Figure = ({ isActiveFigure, title, width, height, ...props }) => {
  return (
    <div {...props} className={`${isActiveFigure ? 'figure-container-active' : 'figure-container'}`}>
      {isActiveFigure ? <span className="figure-mark"><FontAwesomeIcon icon={faCheck} /></span> : null}
      <div style={{ width: `${width}px`, height: `${height}px` }} />
      <h4>{title}</h4>
    </div>
  )
}

const FileInput = () => {
  const fileInput = useRef()
  const handleFileChange = event => {
    console.log(fileInput.current.files[0].name)
  }

  return (<div className="file-input-box">
    <Row className="file-input-content ml-0 mr-0">
      <Col md={3} className="file-input-content-logo">
        <img src={fileUploadLogo} alt="file upload" />
      </Col>
      <Col className="file-input-content-info">
        <h5>Перетащите сюда
изображение</h5>
        <p>Или нажмите и <br />
выберете файл</p>
      </Col>
      <Col md={2} className="file_option-icon">
        <button>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
      </Col>
    </Row>
    <input className="file-input" onChange={handleFileChange} type="file" ref={fileInput} />
  </div>)
}

const MesureSelect = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const [currentMesure, setCurrentMesure] = useState('80 x 120')

  const toggle = () => setOpen(!dropdownOpen);

  return (<div className="mesure-select-container">
    <ButtonDropdown className="mesure-select" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle size='lg'>
        <span>Размер:</span>
        {currentMesure}
        <i>{dropdownOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</i>
      </DropdownToggle>
      <DropdownMenu style={{ left: 'auto' }}>
        <DropdownItem onClick={() => { setCurrentMesure('60 x 150') }} >60 x 150</DropdownItem>
        <DropdownItem onClick={() => { setCurrentMesure('90 x 110') }}>90 x 110</DropdownItem>
        <DropdownItem onClick={() => { setCurrentMesure('50 x 100') }}>50 x 100</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  </div>
  );

}

const Preview = () => {
  const [activeFigure, setActiveFigure] = useState('rectangle')
  return <PreviewContainer style={{ backgroundImage: `url(${previewBg})` }}>
    <Container>
      <PreviewContent>
        <div>
          <Title>Печать на холсте</Title>
          <TitleCaption>с вашим изображением</TitleCaption>
        </div>
        <FigureContainer>
          <Figure isActiveFigure={activeFigure === 'rectangle'} onClick={() => setActiveFigure('rectangle')} width={36} height={19} title="Прямоуг" />
          <Figure isActiveFigure={activeFigure === 'square'} onClick={() => setActiveFigure('square')} width={20} height={19} title="Квадрат" />
          <Figure isActiveFigure={activeFigure === 'panorama'} onClick={() => setActiveFigure('panorama')} width={48} height={19} title="Панорама" />
        </FigureContainer>
        <MesureSelect />
        <FileInput />
      </PreviewContent>
    </Container>
  </PreviewContainer>

}

export default Preview;