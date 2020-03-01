/* Action creators that define actions for saving score to Redux store.  */

export const addScore = (score) => ({
    type: 'ADD_SCORE',
    data: {
        score: score
    }
})

export const createScore = () => ({
    type: 'CREATE_SCORE',
    data: {
        score: 20
    }
})

export const removeScore = () => ({
    type: 'REMOVE_SCORE'
})

export const restoreScore = (username) => ({
    type: 'server/RESTORE_SCORE',
    data: {
        username: username,
        score: 20
    }
})
