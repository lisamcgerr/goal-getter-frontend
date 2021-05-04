import React from 'react'
import { connect } from 'react-redux'
import { createGoal, deleteGoal, deleteUser, updateGoal, updateUser } from '../actions'


class Dashboard extends React.Component {
  render(){
    return(
      <>
      This is the dashboard component
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