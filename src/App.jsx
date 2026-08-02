import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ChallangeDetails from "./pages/ChallengeDetails"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/challenge/:id" element={<ChallangeDetails/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App