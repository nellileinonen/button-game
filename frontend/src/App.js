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
import Container from 'react-bootstrap/Container'

const App = () => {

    const username = useSelector(state => state.username)
    const score = useSelector(state => state.score)
    
    let loginRegister
    let logout
    let restart
    let gameView

    // Show login and registration forms only if there is no username in Redux store.
    // (The app saves Redux store in browser's local storage and deletes it's contents only
    // on logout. This makes the user stay logged in automatically.)
    if (!username) {

        loginRegister = <>
                            <LoginForm />
                            <RegistrationForm />
                        </>

    } else {

        // If there is a username in the Redux store give the user an option to logout.
        logout= <Logout />

        // If there is a username and the user's score is 0 or less give option to restart.
        if (score <= 0) {

            restart = <Restart />

        } else {

            // Otherwise, show logout button, award info (how many clicks is needed to earn more points), 
            // score and game button
            gameView =  <>
                            <AwardInfo />
                            <div id="score-award-button">
                                <Score />
                                <Button />
                            </div>
                        </>
        }
    }

    return  (
        <Container>
            {logout}
            <Container id="game">
                <h1>Button game</h1>
                {loginRegister}
                {restart}
                {gameView}
            </Container>
        </Container>
    )
    
}

export default App
