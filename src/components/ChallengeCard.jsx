import React from 'react'
import { Link } from 'react-router-dom'

const ChallengeCard = ({challenge}) => {
  return (
  <Link to={`/challenge/${challenge.id}`} className='text-decoration-none text-dark'>
    <div className="card m-4 mt-4 d-flex " style={{ width: '24rem' }}>
      <div className="card-body">
        <h5 className="card-title">{challenge.title}</h5>
        <p className="card-text">Type: {challenge.type}</p>
        <p className="card-text">Duration: {challenge.duration} days</p>
      </div>
    </div>
  </Link>
  )
}

export default ChallengeCard