import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsername } from '../actions/usernameAction'
import { addScore } from '../actions/scoreAction'
import { loginUser } from '../services/loginService'

const LoginForm = () => {

    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    // Handle the login form send
    const handleLogin = async (event) => {

        event.preventDefault()
        
        try {
            console.log(username, password)
            // Returned info of the user to be saved to Redux store
            const user = await loginUser({ username, password })
            // Save username and score to Redux store
            dispatch(addUsername(user.username))
            dispatch(addScore(user.score))
        } catch (e) {
            console.log(`Problems with login: ${e}`)
        }
    }
    
    return (
        <div className="form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    value={password}
                    name="password"
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
