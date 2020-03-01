import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restoreScore } from '../actions/scoreAction'
import { Button } from 'react-bootstrap'

const Restart = () => {

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()
    // Username is needed because server must know which user's score to update
    const username = useSelector(state => state.username)
    
    const handleClick = () => {
        // Restore user's score to 20 points
        dispatch(restoreScore(username))
    }

    return (
        <div>
            <p>Game over</p>
            <Button variant="light" className="green-button" onClick={handleClick}>Restart</Button>
        </div>
    )
}

export default Restart
