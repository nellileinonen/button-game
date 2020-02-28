import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsername } from '../actions/usernameAction'
import { createScore } from '../actions/scoreAction'
import { registerUser } from '../services/registerService'

const RegistrationForm = () => {
    
    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    const handleRegister = async (event) => {

        event.preventDefault()

        try {
            console.log(username, password)
            const user = await registerUser({ username, password })
            console.log(user)
            dispatch(addUsername(username))
            dispatch(createScore())
        } catch (e) {
            console.log(`Problems with registration: ${e}`)
        }
        
    }

    return (
        <div className="form">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm