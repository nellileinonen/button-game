import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from './components/AlertTemplate'

// Configure alert message
const options = {
    timeout: 2000,
    position: 'top center',
    transition: 'fade'
}

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Provider>,
    document.getElementById('root')
)
