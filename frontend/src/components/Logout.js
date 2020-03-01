import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUsername } from '../actions/usernameAction'
import { removeScore } from '../actions/scoreAction'
import { Button } from 'react-bootstrap'

const Logout = () => {

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()
    
    const handleClick = () => {
        // Remove the app state from the browser's local storage
        window.localStorage.removeItem('appState')
        // Remove username and score from the Redux store
        dispatch(removeUsername())
        dispatch(removeScore())
    }

    return (
            <Button variant="dark" size="sm" id="logout-button" onClick={handleClick}>Logout</Button>
    )
}

export default Logout
