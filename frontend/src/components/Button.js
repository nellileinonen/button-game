import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from '../actions/pushAction'
import ButtonBootstrap from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const Button = () => {

    // Local state is used to inform the user of possibly on award
    const [award, setAward] = useState(null)

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

        // User gets award if the amount of clicks in Redux store after this click can be
        // divided by 500, 100 or 10
        // If this was a winning click, show user a notification
        let clicksAfterThis = clicks + 1
        if (clicksAfterThis % 500 === 0) {

            // Update award information so the award notification will be shown
            setAward(250)

            // Show award information only for 2 seconds. After that, set back to null
            setTimeout(() => {
                setAward(null)
            }, 2000)

        } else if (clicksAfterThis % 100 === 0) {
            setAward(40)
            setTimeout(() => {
                setAward(null)
            }, 2000)
        } else if (clicksAfterThis % 10 === 0) {
            setAward(5)
            setTimeout(() => {
                setAward(null)
            }, 2000)
        }
    }

    return (
        <div>
            {(award &&
                <Alert variant="success" id="award">
                    <p>+ {award}</p>
                </Alert>
            )}
            <ButtonBootstrap variant="light" id="gamebutton" onClick={handleClick}></ButtonBootstrap>
        </div>
    )
}

export default Button
