import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Button from './components/Button'
import Score from './components/Score'

const App = () => {

    const username = useSelector(state => state.username)
    
    return (
        <div className="App">
            <h1>Button game</h1>
            {// Show login and registration forms only if there is no username in Redux store.
             // Otherwise, show logout button, score and game button.
             username === null ?
             <div>
                 <LoginForm />
                 <p>Or if this is your first time here:</p>
                 <RegistrationForm />
             </div>
             :
             <div>
                 <Button />
             </div>}
        </div>
    )
}

export default App
