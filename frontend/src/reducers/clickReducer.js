// Initial state before registering or login is null
const initialState = null

const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action of type server/PUSH happens when the game button is clicked
        case 'server/PUSH':
            // Clicking the game button adds 1 click to the total amount of clicks in the game
            // to the Redux store
            return state + 1
        // Action of type server/ALL_CLICKS happens when the page is refreshed or browser is reopened
        case 'server/ALL_CLICKS':
            return action.allClicks
        // Add a click to the Redux store after someone else has clicked the game button
        case 'server/ADD_CLICK':
            return state + 1
        // TODO: DELETTE THIS. For testing only
        case 'server/ADD_500':
            return state + 500
        default:
            return state
    }
}

export default clickReducer
