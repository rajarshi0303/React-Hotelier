import { Routes, Route } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Rooms from "./pages/Rooms"
import RoomDetails from "./pages/RoomDetails"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"

//Layouts
import Navbar from "./layout/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/roomdetails/:id" element={<RoomDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
