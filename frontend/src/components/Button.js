import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from '../actions/pushAction'

const Button = () => {

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(push())
    }

    return (
        <button onClick={handleClick}>Push!</button>
    )
}

export default Button