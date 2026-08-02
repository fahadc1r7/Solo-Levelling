import React from 'react'

const ChallengeDetails = () => {
  return (
    <div>
        <div className="card m-2" style={{width:'18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{}challenge.title</h5>
                <p className="card-text">Type: {Challange.type}</p>
                <p className="card-text">Duration: {challange.duration}days</p>
            </div>

        </div>
    </div>
  )
}

export default ChallengeDetails