import "./data/places.json"
import './App.css'
import Login from './Pages/Login'
// import VisitList from './component/VisitList'
import Testimonial from './component/Testimonial'
import SignUp from './pages/SignUp'
// import Banner from "./component/Banner"
import Footer from "./component/Footer"
import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/Landing"
import BookNow from "./pages/BookNow"
import Navbar from "./component/Navbar"
import VisitList from "./component/VisitList"
import PlaceDetail from "./component/PlacesDetail"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signIn" element={<Login/>} />
          <Route path="/BookNow" element={<BookNow/>} />
          <Route path="/VisitList" element={<VisitList/>} />
          <Route path="/BookNow" element={<BookNow/>} />
          <Route path="/places/:city/:placePath" element={<PlaceDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
