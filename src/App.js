// Import React (Mandatory Step).
import React from 'react'
// Import ReactDOM (Mandatory Step).
import ReactDOM from 'react-dom'
import logo from './laugh.png'
import './App.css'

// Import The Button Component from Button.js
// eslint-disable-next-line no-unused-vars
import Button from './Component/Button'

const rootElement = document.getElementById('root')

// Create a functional component
const App = () => {
  // Declare a state variable
  const [Joke, setJoke] = React.useState('')

  const fetchApi = () => {
    // Fetching data from the API
    // eslint-disable-next-line no-undef
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
  }

  // look into login using state - nodeJS token

  // useRef to go back to previous joke - https://reactjs.org/docs/hooks-reference.html#useref

  return (
    // Return the Button Component with a conditional statement
    <div className="App-header">
      <p>{'Dad joke of the day'}</p>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App">
        <p>{Joke}</p>
        <Button callApi={fetchApi} />
      </div>
    </div>
  )
}

// Rendering the App Component.
ReactDOM.render(
  <App />,
  rootElement
)
export default App
