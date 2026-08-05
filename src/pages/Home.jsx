import { useState } from "react"
import Hero from "../components/Hero"
import ChallengeList from "../components/ChallengeList"
import ChallengeFilter from "../components/ChallengeFilter"


const Home = () => {
  const [selectedType, setSelectedType] = useState("All")
  return (
    <div>
      <Hero />
      <div id="challenges" className="container">
        <h1 className="text-center m-4">Challenges</h1>
        <p className="text-center">Break Your Limits</p>
        <ChallengeFilter selectedType={selectedType} setSelectedType={setSelectedType}/>
        <ChallengeList  selectedType={selectedType}/>
      </div>
    </div>
  )
}

export default Home