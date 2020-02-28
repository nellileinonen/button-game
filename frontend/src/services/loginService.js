// Use axios to connect directly to the server (without redux-socket.io middleware dispatching 
// everything to Redux store)
import axios from 'axios'

// Url where server accepts user logins
const url = 'http://localhost:8000/login'

export const loginUser = async (credentials) => {
    console.log('In login')
    const response = await axios.post(url, credentials)
    console.log(response)
    return response.data
}
