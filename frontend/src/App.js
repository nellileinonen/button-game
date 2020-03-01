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
            // (The app saves Redux store in browser's local storage and deletes it's contents only
            // on logout. This makes the user stay logged in automatically.)
            username === null

            ?

            <div>
                <LoginForm />
                <p>Or if this is your first time here:</p>
                <RegistrationForm />
            </div>

            :
            
            // If there is a username in the Redux store and the user's score is 0 or less,
            // give the user an option to logout or restart.
            // Otherwise, show logout button, award info (how many clicks is needed to earn more points), 
            // score and game button
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
