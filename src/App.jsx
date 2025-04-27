import { useState } from 'react'
import "./data/places.json"
import './App.css'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
      <Footer/>
    </>
  )
}

export default App
