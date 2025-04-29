import "./data/places.json"
import './App.css'
import Login from './Pages/Login'
import VisitList from './component/VisitList'
import Testimonial from './component/Testimonial'
import SignUp from './pages/SignUp'
import Footer from "./component/Footer"
import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/Landing"
import BookNow from "./pages/BookNow"
import Navbar from "./component/Navbar"
import Payment from "./component/Payment"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signIn" element={<Login/>} />
          <Route path="/BookNow" element={<BookNow/>} />
          <Route path="/VisitList" element={<VisitList/>} />
          <Route path="/Payment" element={<Payment/>} />
          
          {/* <VisitList /> */}
          {/* <Testimonial /> */}
          {/* <SignUp /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
