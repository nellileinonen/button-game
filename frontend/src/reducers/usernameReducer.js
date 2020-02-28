// Initial state before registering or login is null
const initialState = null

const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action of type ADD_USER happens when the registration or login form is sent
        case 'ADD_USERNAME':
            // Clicking the game button adds 1 click to the total amount of clicks in the game
            // to the Redux store
            return action.data.username
        case 'REMOVE_USERNAME':
            return null
        default:
            return state
    }
}

export default usernameReducer
