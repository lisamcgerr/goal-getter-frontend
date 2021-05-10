import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT } from '../actions/Actiontypes'

function authReducer(state = null, action){
    switch(action.type) {
        case LOGIN_SUCCESS:
            debugger
            return {
                id: action.user.id,
                username: action.user.username,
                goals: action.user.goals }
        case CURRENT_USER:   
            return {
                id: action.user.id,
                username: action.user.username,
                goals: action.user.goals }
        case LOGOUT:
            return null
        default:
            return state
    }
}

export default authReducer