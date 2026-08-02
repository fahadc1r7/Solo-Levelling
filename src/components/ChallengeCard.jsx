import React from 'react'

const ChallengeCard = ({challenge}) => {
  return (
    <div className="card m-2 d-flex " style={{ width: '24rem' }}>
      <div className="card-body">
        <h5 className="card-title">{challenge.title}</h5>
        <p className="card-text">Type: {challenge.type}</p>
        <p className="card-text">Duration: {challenge.duration} days</p>
      </div>
    </div>
  )
}

export default ChallengeCard