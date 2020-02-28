import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Restart from './components/Restart'
import Logout from './components/Logout'
import AwardInfo from './components/AwardInfo'
import Score from './components/Score'
import Button from './components/Button'

const App = () => {

    const username = useSelector(state => state.username)
    const score = useSelector(state => state.score)
    
    return (
        <div className="App">
            <h1>Button game</h1>
            {// Show login and registration forms only if there is no username in Redux store.
            // Otherwise, show logout button, score and game button.
            username === null

            ?

            <div>
                <LoginForm />
                <p>Or if this is your first time here:</p>
                <RegistrationForm />
            </div>

            :
            
            // If score is 0, give the user an option to logout or restart
            score <= 0
            
            ? 
            
            <div>
                <Logout />
                <Restart />
            </div>
            
            :

            <div>
                <Logout />
                <AwardInfo />
                <Score />
                <Button />
            </div>}
        </div>
    )
}



export default App
