import React from 'react'
import { connect } from 'react-redux'
import { createGoal, deleteGoal, deleteUser, updateGoal, updateUser } from '../actions'
import Grid from '@material-ui/core/Grid'

class Dashboard extends React.Component {

  state = { percent: 33 }
  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render(){
    return(
      <Grid item xs={3}> 
      </Grid>
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