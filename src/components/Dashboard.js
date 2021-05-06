import React from 'react'
import { connect } from 'react-redux'
import { createGoal, deleteGoal, deleteUser, updateGoal, updateUser } from '../actions'


class Dashboard extends React.Component {

  state = { percent: 33 }
  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render(){
    return(
      <>
      This is the dashboard component

      layout: 
      users name
      list of goals - with semantic UI loading bars
      button to edit goal
      button to delete goal
      button to update username in the top corner


      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
      </>
    )
  }
}

const mapDispatchToProps = {
  deleteUser: deleteUser,
  updateUser: updateUser,
  createGoal: createGoal,
  updateGoal: updateGoal,
  deleteGoal: deleteGoal,
}

function mapStateToProps(state){
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)