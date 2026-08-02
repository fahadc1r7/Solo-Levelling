import React from 'react'
import ChallengeList from '../components/ChallengeList'

const Home = () => {
  return (
    <div>
        <h1 className='text-center fw-bold p-3'>Home Page</h1>
        <h2 className='text-center fw-bold'>Challenges</h2>
        <p className='text-center'>Break Your Limits</p>
        <ChallengeList/>
    </div>
  )
}

export default Home