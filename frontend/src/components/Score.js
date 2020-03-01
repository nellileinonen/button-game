import React from 'react'
import { useSelector } from 'react-redux'

const Score = () => {

    const score = useSelector(state => state.score)
    
    return (
        <p id="score">{score}</p>
    )
}

export default Score
