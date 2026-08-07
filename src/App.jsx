import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChallangeDetails from "./pages/ChallengeDetails"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/challenge/:id" element={<ChallangeDetails/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App