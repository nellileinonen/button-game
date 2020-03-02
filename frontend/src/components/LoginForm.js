import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsername } from '../actions/usernameAction'
import { addScore } from '../actions/scoreAction'
import { loginUser } from '../services/loginService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const LoginForm = () => {

    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    // Dispatch is needed to dispatch the state to Redux store
    const dispatch = useDispatch()

    // Handle the login form send
    const handleLogin = async (event) => {

        event.preventDefault()
        
        try {
            // Returned info of the user to be saved to Redux store
            const response = await loginUser({ username, password })
            // Save username and score to Redux store
            dispatch(addUsername(response.username))
            dispatch(addScore(response.score))
        } catch (e) {
            // Inform the user of the problems with login
            console.log(`Problems with login: ${e}`)
            setErrorMessage('Username or password incorrect. Try again!')
            // Clear form fields
            setUsername('')
            setPassword('')
        }
    }
    
    return (
        <div className="form">
            <h2>Login</h2>
            {(errorMessage &&
                <Alert variant="info">
                    {errorMessage}
                </Alert>
            )}
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label htmlFor="usernameLogin">Username</Form.Label>
                    <Form.Control
                    type="text"
                    value={username}
                    name="username"
                    id="usernameLogin"
                    required
                    onChange={({ target }) => setUsername(target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="passwordLogin">Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    name="password"
                    id="passwordLogin"
                    required
                    onChange={({ target }) => setPassword(target.value)}
                    />
                </Form.Group>
                <Button variant="light" className="green-button" type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default LoginForm
