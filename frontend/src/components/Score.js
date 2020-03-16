import React from 'react'
import { useSelector } from 'react-redux'

const Score = () => {

    const score = useSelector(state => state.score)
    
    return (
        <div>
            <p className="info-text">Your points:</p>
            <p id="score">{score}</p>
        </div>
    )
}

export default Score
