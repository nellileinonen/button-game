// Use axios to connect directly to the server (without redux-socket.io middleware dispatching 
// everything to Redux store)
import axios from 'axios'

// Url where server accepts user registrations
//const url = 'http://localhost:8000/register'
// For production: Url where server accepts user registrations
const url = 'https://buttongame2020.herokuapp.com/register'

export const registerUser = async (credentials) => {
    const response = await axios.post(url, credentials)
    return response
}
