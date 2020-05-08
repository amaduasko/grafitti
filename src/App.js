import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBarComponent from './components/Navbar'
import Header from './components/Header'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Ship from './Pages/Ship'

function App() {
  return (
    <div className='App'>
      <Header>
        <NavBarComponent />
      </Header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ship' component={Ship} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  )
}

export default App
