import { useState } from 'react'
import "./data/places.json"
import './App.css'
import Login from './Pages/Login'
import VisitList from './component/VisitList'
import Testimonial from './component/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
      <VisitList/>
      <Testimonial/>
    </>
  )
}

export default App
