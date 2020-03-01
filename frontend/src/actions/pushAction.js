/* Action creators that define actions based on the total amount of clicks in the game 
   after the game button click.
*/

export const push = (username, clicksBefore, scoreBefore) => {

    // User gets points every 500th, 100th and 10th click. Score is updated by 250, 40 or 5 points respectively.
    // (However, because every click costs 1 point, user is actually given 1 point less than previously mentioned.)
    // Normal push decreases user's points by 1 point.
    let score = null
    let clicks = clicksBefore + 1
    console.log('Action has clicksBefore: ', clicksBefore, ' and adds it to clicks: ', clicks)
    if (clicks % 500 === 0) {
        score = scoreBefore + 249
        return {
            type: 'server/PUSH_249_POINTS',
            data: {
                username: username,
                allClicks: clicks,
                score: score
            }
        }
    } else if (clicks % 100 === 0) {
        score = scoreBefore + 39
        return {
            type: 'server/PUSH_39_POINTS',
            data: {
                username: username,
                allClicks: clicks,
                score: score
            }
        }
    } else if (clicks % 10 === 0) {
        score = scoreBefore + 4
        return {
            type: 'server/PUSH_4_POINTS',
            data: {
                username: username,
                allClicks: clicks,
                score: score
            }
        }
    } else {
        score = scoreBefore - 1
        return { 
            type: 'server/PUSH',
            data: {
                username: username,
                allClicks: clicks,
                score: score
            }
        }
    }
}
