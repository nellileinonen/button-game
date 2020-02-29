import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsername } from '../actions/usernameAction'
import { createScore } from '../actions/scoreAction'
import { registerUser } from '../services/registerService'

const RegistrationForm = () => {
    
    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    const handleRegister = async (event) => {

        event.preventDefault()

        // Check that passwords match
        if (password === passwordAgain) {
            try {
                // TODO: Check if the user is ok. Now server does not send anything back
                const response = await registerUser({ username, password })
                console.log('User is ', response)
                
                if (response.data.errors) {
                    // TODO: If server sends error, tell user what needs to be done
                    console.log('Pick another username.')
                    // Clear form fields
                    setUsername('')
                    setPassword('')
                    setPasswordAgain('')
                }
                // If user was created to the database, add it to Redux store also
                else {
                    dispatch(addUsername(response.data.username))
                    dispatch(createScore())
                }
            } catch (e) {
                // TODO: Inform the user with problems in registration
                console.log(`Problems with registration: ${e}`)
                // Clear form fields
                setUsername('')
                setPassword('')
                setPasswordAgain('')
            }
        }
        else {
            // TODO: Inform the user that passwords did not match
            console.log('Passwords do not match')
            // Clear password fields
            setPassword('')
            setPasswordAgain('')
        }
        
    }

    return (
        <div className="form">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="usernameRegister">Username</label>
                    <input
                    type="text"
                    value={username}
                    name="username"
                    id="usernameRegister"
                    required
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passwordRegister">Password</label>
                    <input
                    type="password"
                    value={password}
                    name="password"
                    id="passwordRegister"
                    required
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="passwordAgain">Password again</label>
                    <input
                    type="password"
                    value={passwordAgain}
                    name="passwordAgain"
                    id="passwordAgain"
                    required
                    onChange={({ target }) => setPasswordAgain(target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm
