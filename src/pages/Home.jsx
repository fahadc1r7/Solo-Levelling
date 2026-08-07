import { useState } from "react"
import Hero from "../components/Hero"
import ChallengeList from "../components/ChallengeList"
import ChallengeFilter from "../components/ChallengeFilter"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const Home = () => {
  const [selectedType, setSelectedType] = useState("all")
  const location = useLocation()

  useEffect(()=>{
    if(location.hash ==="#challenges"){
      setTimeout(()=>{
        const el = document.getElementById("challenges")
        if (el) el.scrollIntoView({behavior: "smooth"})
          window.history.replaceState(null, "", "/")
      },100)
    }
  },[location])
  return (
    <div>
      <Hero />
      <div id="challenges" className="container-fluid py-5 section-dark" style={{scrollMarginBottom: "80px"}}>
        <h1 className="text-center m-2">Challenges</h1>
        <p className="text-center">Break Your Limits</p>
        <ChallengeFilter selectedType={selectedType} setSelectedType={setSelectedType}/>
        <ChallengeList  selectedType={selectedType}/>
      </div>
    </div>
  )
}

export default Home