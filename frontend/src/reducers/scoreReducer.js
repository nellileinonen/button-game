// Initial state before registering or login is null
const initialState = null

const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action of type CREATE_SCORE happens when the registration form is sent
        case 'CREATE_SCORE':
            // Clicking the game button adds 1 click to the total amount of clicks in the game
            // to the Redux store
            return action.data.score
        // Action of type ADD_SCORE happens when the login form is sent
        case 'ADD_SCORE':
            return action.data.score
        default:
            return state
    }
}

export default scoreReducer
