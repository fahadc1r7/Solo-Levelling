import React from 'react'
import { useParams, Link } from 'react-router-dom'
import challenges from "../data/challenges.json"



const ChallengeDetails = () => {
  const {id} = useParams()
  const challange = challenges.find((c) => c.id === parseInt(id))
   
if (!challange) return <h2 className='text-center mt-5'>Challenges not found</h2>


return (
  <div  id="challengeSection" className="container mt-5 text-center">
    <h1>{challange.title}</h1>
    <p>Type: {challange.type}</p>
    <p>Duration: {challange.duration}</p>
    <p>Benefits: {challange.benefits}</p>
    <button className="btn btn-outline-dark btn-lg mt-3">Join Challenges</button>
    <br />
    <Link to="/" className='btn btn-outline-danger mt-3'>← Back to Challenges</Link>
  </div>
)
}

export default ChallengeDetails