import React from 'react'

// Styling for alert message
const alertStyle = {
    backgroundColor: '#61892F',
    color: 'white',
    fontWeight: 'bold',
    padding: '20px',
    borderRadius: '80px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Arial',
    width: '45px'
}

const AlertTemplate = ({ message }) => {
  return (
    <div style={{ ...alertStyle }}>
      <span>{message}</span>
    </div>
  )
}

export default AlertTemplate;