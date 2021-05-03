import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render(){
    return(
      <Menu>
          <Link to ='/home'>
            <Menu.Item name='My Home Page' />
          </Link>
        <Menu.Menu position='right'>
          <Link to ='/login'>
            <Menu.Item name='Login' />
          </Link>
          <Link to ='/signup'>
            <Menu.Item name='Sign Up' />
          </Link>
        </Menu.Menu>
      
      </Menu>
    )
  }
}

export default Navbar