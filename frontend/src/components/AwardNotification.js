import React from 'react'

const AwardNotification = ({ award }) => {

    // Show award notification only if user has won points
    if (award === null) {
        return null
    }
    return (
        <div>
            <p>+ {award}</p>
        </div>
    )
}

export default AwardNotification