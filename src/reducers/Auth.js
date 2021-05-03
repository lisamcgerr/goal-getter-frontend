import { LOGIN_SUCCESS, CURRENT_USER, LOGOUT } from '../actions/ActionTypes'
import authReducer from './Auth'

function authReducer(state = null, action){
    switch(action.type) {
        case LOGIN_SUCCESS:
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