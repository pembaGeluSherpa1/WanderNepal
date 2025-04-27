import "./data/places.json"
import './App.css'
import Navbar from "./component/Navbar"
import Banner from "./component/Banner"
import { Router,Route,Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
