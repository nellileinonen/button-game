import React from 'react'

const AwardNotification = ({ award }) => {

    // Show award notification only if user has won points
    if (award === null) {
        return null
    }

    return (
        <>
            <p id="award-notification">+ {award}</p>
        </>
    )
}

export default AwardNotification