import "./data/places.json"
import './App.css'
import Login from './Pages/Login'
import VisitList from './component/VisitList'
import Testimonial from './component/Testimonial'
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
      <Login/>
      <VisitList/>
      <Testimonial/>
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
