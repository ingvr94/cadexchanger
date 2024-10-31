import Navbar from "./scenes/header"
import Main from "./pages/Main"
import ContactUs from "./pages/ContactUs"
import Footer from "./scenes/footer"
import {Routes, Route,Navigate} from 'react-router-dom'

function App() {
  
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Main />}/>
        <Route path="/contactus" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
