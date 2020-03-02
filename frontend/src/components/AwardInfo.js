import React from 'react'
import { useSelector } from 'react-redux'

const AwardInfo = () => {

    let clicks = useSelector(state => state.allClicks)
    let counter = null

    // Next award is 10 clicks away if someone won on last click (i.e. if the amount of clicks in
    // Redux store can be divided by 10)
    if (clicks % 10 === 0) {
        counter = 10
    }
    else {
        // Count clicks to the next award
        while (!(clicks % 10 === 0)) {
            counter++
            clicks++
        }
    }
    
    return (
        <p id="award-info">Next award is only <br /><span>{counter}</span><br /> click{counter !== 1 ? 's' : ''} away!</p>
    )
}

export default AwardInfo
