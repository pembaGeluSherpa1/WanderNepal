import "./data/places.json"
import './App.css'
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import { Router,Route,Routes } from "react-router-dom"
import SignUp from './pages/SignUp'
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import SignUp from "./pages/SignUp"
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <SignUp/>
      <Footer/>

      <Navbar/>
      <Banner/>

    </>
  )
}

export default App
