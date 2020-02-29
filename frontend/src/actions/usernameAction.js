/* Action creator that defines actions for handling username in Redux store. */

export const addUsername = (username) => ({
    
    // Username Redux store
    type: 'ADD_USERNAME',
    data: {
        username: username
    }
})

export const removeUsername = () => ({
    type: 'REMOVE_USERNAME'
})
