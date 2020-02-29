import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { push } from '../actions/pushAction'

const Button = () => {

    // Alert will be used if the user wins points on game button click
    const alert = useAlert()

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()
    // Info of all clicks and user's score is needed to determine the points that
    // the user loses or wins after pressing the game button
    const clicks = useSelector(state => state.allClicks)
    const score = useSelector(state => state.score) 
    // Username is needed because server must know which user's score to update
    const username = useSelector(state => state.username)

    // User gets award if the amount of clicks in Redux store after this click can be
    // divided by 500, 100 or 10
    let award = null

    const handleClick = () => {
        dispatch(push(username, clicks, score))
        // If this was a winning click, show user an alert
        let clicksAfterThis = clicks + 1
        if (clicksAfterThis % 500 === 0) {
            award = 250
        } else if (clicksAfterThis % 100 === 0) {
            award = 40
        } else if (clicksAfterThis % 10 === 0) {
            award = 5
        }
        
        if (award) {
            alert.show(<p>+ {award}</p>)
        }
    }

    return (
        <button onClick={handleClick}>Push!</button>
    )
}

export default Button
