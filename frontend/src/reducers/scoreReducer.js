// Initial state before registering or login is null
const initialState = null

const scoreReducer = (state = initialState, action) => {

    switch (action.type) {
        // WHen registration form is sent
        case 'CREATE_SCORE':
            // Clicking the game button adds 1 click to the total amount of clicks in the game
            // to the Redux store
            return action.data.score
        // When the login form is sent
        case 'ADD_SCORE':
            return action.data.score
        // When the game button is pushed and new score is updated
        case 'server/PUSH':
            return action.data.score
        // When the game button is pushed and new score is updated
        case 'server/PUSH_4_POINTS':
            return action.data.score
        // When the game button is pushed and new score is updated
        case 'server/PUSH_39_POINTS':
            return action.data.score
        // When the game button is pushed and new score is updated
        case 'server/PUSH_249_POINTS':
            return action.data.score
        // When the game button is pushed and new score is updated
        case 'server/ADD_20_POINTS':
            return action.data.score
        case 'REMOVE_SCORE':
            return null
        case 'server/RESTORE_SCORE':
            return action.data.score
        default:
            return state
    }
}

export default scoreReducer
