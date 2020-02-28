/* Action creator that defines actions for handling username in Redux store. */
export const addUsername = (username) => ({

    // TODO: Get token for the newly registered user OR Save redux store to local storage!
    // TODO: Save the token to the browser's local storage OR Save redux store to local storage!
    //window.localStorage.setItem('buttonGameUser', JSON.stringify(userToken))
    
    // Username Redux store
    type: 'ADD_USERNAME',
    data: {
        username: username
    }
})
