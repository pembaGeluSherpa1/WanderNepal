import "./data/places.json"
import './App.css'
import Login from './Pages/Login'
import VisitList from './component/VisitList'
import Testimonial from './component/Testimonial'
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import { Router,Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Login/>
      <VisitList/>
      <Testimonial/>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
