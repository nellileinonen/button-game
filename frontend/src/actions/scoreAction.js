/* Action creator that defines actions for saving score to Redux store.  */

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
