import { Routes, Route } from "react-router-dom"
import ContextProvider from "./CartContext"
import Navbar from "./Home/Navbar"
import Footer from "./Home/Footer"
import Home from "./Home/Home"
import Cart from "./Cart/Cart"
import Clothes from "./Clothes/Clothes"
import About from "./About/About"


function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ContextProvider>
  )
}

export default App
