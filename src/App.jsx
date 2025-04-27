import "./data/places.json"
import './App.css'
import SignUp from './pages/SignUp'
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import { Router,Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <SignUp/>
      <Footer/>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
