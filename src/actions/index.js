

export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user: user
    }
}

export function currentUser(user){
    return {
        type: CURRENT_USER,
        user: user
    }
}

export function logout(user){
    return {
        type: LOGOUT,
        user: user
    }
}

//<------------------------------- USER ------------------------------->//

export function createUser(user){
    return{
        type: CREATE_USER,
        user: user
    }
}

export function deleteUser(user){
    return{
        type: DELETE_USER,
        user: user
    }
}

export function updateUser(user){
    return{
        type: UPDATE_USER,
        user: user
    }
}

//<------------------------------- GOAL ------------------------------->//

export function createGoal(goal){
    return{
        type: CREATE_GOAL,
        goal: goal
    }
}

export function deleteGoal(goal){
    return{
        type: DELETE_GOAL,
        goal: goal
    }
}

export function updateGoal(goal){
    return{
        type: UPDATE_GOAL,
        goal: goal
    }
}