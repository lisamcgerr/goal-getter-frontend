import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

class App extends React.Component {
  render(){
    return(
      <>
      <Navbar/>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={Dashboard} />
      </Switch>
      </>
    )
  }
}

export default App
