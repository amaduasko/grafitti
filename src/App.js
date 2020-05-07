import React from 'react'
import { Col } from 'reactstrap'
import logo from './logo.svg'
import NavBarComponent from './components/Navbar'
import Header from './components/Header'
import Preview from './components/Preview'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header>
        <NavBarComponent />
      </Header>
      <Preview />
    </div>
  )
}

export default App
