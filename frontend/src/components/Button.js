import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from '../actions/pushAction'

const Button = () => {

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()
    // Info of all clicks and user's score is needed to determine the points that
    // the user loses or wins after pressing the game button
    const clicks = useSelector(state => state.allClicks)
    const score = useSelector(state => state.score) 
    // Username is needed because server must know which user's score to update
    const username = useSelector(state => state.username)

    const handleClick = () => {
        dispatch(push(username, clicks, score))
    }

    return (
        <button onClick={handleClick}>Push!</button>
    )
}

export default Button
