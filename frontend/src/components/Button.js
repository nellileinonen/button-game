import React from 'react'
import { push } from '../actions/pushAction'
import { useDispatch } from 'react-redux'

const Button = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(push())
    }

    return (
        <button onClick={handleClick}>Push!</button>
    )
}

export default Button