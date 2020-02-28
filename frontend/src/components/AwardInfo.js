import React from 'react'
import { useSelector } from 'react-redux'

const AwardInfo = () => {

    let clicks = useSelector(state => state.allClicks)
    let counter = null

    // If there was some points to win on button click, see how many points the user won.
    // User gets 250 points for every 500th, 40 for every 100th and
    // 5 for every 10th click in the game
    if (clicks % 10 === 0) {
        if (clicks % 500 === 0) {
            //newPoints = 250
        } else if (clicks % 100 === 0) {
            //newPoints = 40
        } else {
            //newPoints = 5
        }
        // 10 clicks to the next award
        counter = 10
    }
    else {
        // Count clicks to the next award
        while (!(clicks % 10 === 0)) {
            counter++;
            clicks++;
        }
    }
    // <p>{award}</p>
    return (
        <div>
            
            <p>Next award is {counter} click{counter !== 1 ? 's' : ''} away!</p>
        </div>
    )
}

export default AwardInfo
