import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'

// Save app state to the browser's local storage
const saveState = (state) => {
    try {
        // App state to JSON string
        const stateJSON = JSON.stringify(state)
        window.localStorage.setItem('appState', stateJSON)
    } catch (e) {
        console.log(e)
    }
}

// Check if there is app state saved in local storage
const loadState = () => {
    try {
        // Load app state stored in the browser's local storage
        const stateJSON = window.localStorage.getItem('appState')

        // If no data is saved, return undefined
        if (!stateJSON) {
            return undefined
        }

        return JSON.parse(stateJSON)
    } catch (e) {
        console.log(`Error on checking the app state from the browser's local sotrage: ${e}`)
    }
}

const initialState = loadState()

// For local development
//let socket = io('http://localhost:8000')
// For production
let socket = io('https://buttongame2020.herokuapp.com')

// Use socket io middleware
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")
const middleware = [socketIoMiddleware]

// Redux devtools extension for Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))

// Change listener to the store
store.subscribe(() => {
    console.log('New state in Redux store: ', store.getState())
    saveState(store.getState());
})

export default store