import React from 'react'
import { Button, Segment, Form, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/index'


  class Login extends React.Component {
    state = {
      username: 'lisas_learning',
      password: 'coding',
      error: ''
  }

  handleInput = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:  JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/login', reqObj)
    .then(resp => resp.json())
    .then(data => {
        console.log('data', data)
        if (data.error){
            this.setState({
                error: data.error
            })
        } else {
            this.props.loginSuccess(data.user)
            localStorage.setItem('myAppToken', data.token)
            this.setState({
                username: '',
                password: '',
                error: ''})
            this.props.history.push('/home')
        }
    })
}
  
  render(){
    return(
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 550 }}>
        <h1>Login</h1>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment inverted stacked>
              <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  name={'username'} 
                  onChange={this.handleInput} 
                  value={this.state.username} 
                  placeholder='username' />
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
                  Login
                </Button>
            </Segment>
          </Form>
       </Grid.Column>
      </Grid>
      </>
    )
  }
}

const mapDispatchToProps = {
  loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
