import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import io from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'

let socket = io('http://localhost:8000')

// Use socket io middleware
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")
const middleware = [socketIoMiddleware]

// Redux devtools extension for Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

// Change listener to the store
store.subscribe(() => {
    console.log('New state in Redux store: ', store.getState())
})

export default store