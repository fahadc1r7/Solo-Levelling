import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChallangeDetails from "./pages/ChallengeDetails"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/challenge/:id" element={<ChallangeDetails/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App