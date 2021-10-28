// Import React (Mandatory Step).
// eslint-disable-next-line no-unused-vars
import React from 'react'

// Create a functional component
const Button = (props) => {
  return <button onClick={props.callApi}>
        Tell me a Joke!
  </button>
}

// Export Button Component
export default Button
