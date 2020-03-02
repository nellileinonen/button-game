import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsername } from '../actions/usernameAction'
import { createScore } from '../actions/scoreAction'
import { registerUser } from '../services/registerService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const RegistrationForm = () => {
    
    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    const handleRegister = async (event) => {

        event.preventDefault()

        // Check that passwords match
        if (password === passwordAgain) {

            try {
                const response = await registerUser({ username, password })
                
                if (response.data.errors) {
                    // Tell the user that username is already in use
                    console.log('Username already in use. Pick another username.')
                    setErrorMessage('Username already in use. Pick another one.')
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
                // Inform the user with problems in registration
                console.log(`Could not register user: ${e}`)
                setErrorMessage('Could not register user. Try again!')
                // Clear form fields
                setUsername('')
                setPassword('')
                setPasswordAgain('')
            }
        }
        else {
            // Inform the user that passwords did not match
            console.log('Passwords do not match')
            setErrorMessage('Passwords do not match. Try again!')
            // Clear password fields
            setPassword('')
            setPasswordAgain('')
        }
        
    }

    return (
        <div className="form">
            <p id="instruction">Or if this is your first time here:</p>
            <h2>Register</h2>
            {(errorMessage &&
                <Alert variant="info">
                    {errorMessage}
                </Alert>
            )}
            <Form onSubmit={handleRegister}>
                <Form.Group>
                    <Form.Label htmlFor="usernameRegister">Username</Form.Label>
                    <Form.Control
                    type="text"
                    value={username}
                    name="username"
                    id="usernameRegister"
                    required
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="passwordRegister">Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    name="password"
                    id="passwordRegister"
                    required
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="passwordAgain">Password again</Form.Label>
                    <Form.Control
                    type="password"
                    value={passwordAgain}
                    name="passwordAgain"
                    id="passwordAgain"
                    required
                    onChange={({ target }) => setPasswordAgain(target.value)}
                    />
                </Form.Group>
                <Button variant="light" className="green-button" type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default RegistrationForm
