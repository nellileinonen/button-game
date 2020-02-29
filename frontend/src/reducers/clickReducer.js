// Initial state before registering or login is null
const initialState = null

const clickReducer = (state = initialState, action) => {

    switch (action.type) {
        // When the game button is clicked, an action starting with 'server/PUSH' is dispatched
        case 'server/PUSH':
            // Clicking the game button adds 1 click to the total amount of clicks in the game
            // to the Redux store
            return state + 1
        case 'server/PUSH_4_POINTS':
            return state + 1
        case 'server/PUSH_39_POINTS':
            return state + 1
        case 'server/PUSH_249_POINTS':
            return state + 1
        case 'server/PUSH_20_POINTS':
            return state + 1
        case 'server/ALL_CLICKS':
            return action.allClicks
        // When someone else has clicked the button, server sends and action of type 'server/ADD_CLICK'
        case 'server/ADD_CLICK':
            return state + 1
        default:
            return state
    }
}

export default clickReducer
