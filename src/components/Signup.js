import React from 'react'
import { Button, Segment, Form, Grid } from 'semantic-ui-react'


class Signup extends React.Component {

  state = {
    username: '',
    password: ''
  }

  // handleChange = (e) => {
  //   this.setState({
  //       [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  //   const newUser = {...this.state}
  //   console.log(newUser)

  //   const reqObj = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json'
  //       },
  //       body:  JSON.stringify({user: newUser})
  //   }
  //   fetch('http://localhost:3000/users', reqObj)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     this.props.addUser(data)
  //     this.props.history.push('/login')
  //   })
  // }

  render(){
    return(
      <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 550 }}>
        <h1>Sign Up</h1>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment inverted stacked>
              <Form.Input fluid icon='user' iconPosition='left' name={'username'} onChange={this.handleInput} value={this.state.username} placeholder='username' />
                <Form.Input
                  fluid
                  icon='lock'
                  type='password'
                  iconPosition='left'
                  name={'password'} 
                  onChange={this.handleInput} 
                  value={this.state.password} 
                  placeholder='password'
                />

                <Button color='green' fluid size='large'>
                  Sign Up
                </Button>
            </Segment>
          </Form>
       </Grid.Column>
      </Grid>
      </>
    )
  }
}

export default Signup