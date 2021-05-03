import React from 'react'
import { Button, Segment, Form, Grid } from 'semantic-ui-react'

class GoalForm extends React.Component {

    state = {
        description: ''
    }
  render(){
    return(
      <>
      This is the GoalForm component
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 550 }}>
        <h1>Create a Goal</h1>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment inverted stacked>
                <Form.TextArea
                  fluid
                  icon='edit outline'
                  iconPosition='left'
                  name={'description'} 
                  onChange={this.handleInput} 
                  value={this.state.description} 
                  placeholder='describe your goal'
                />

                <Button color='green' fluid size='large'>
                  Submit
                </Button>
            </Segment>
          </Form>
       </Grid.Column>
      </Grid>
      </>
    )
  }
}

export default GoalForm