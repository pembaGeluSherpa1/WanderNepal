import { useState } from 'react'
import "./data/places.json"
import './App.css'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
