import React from 'react'

const ChallengeFilter = ({selectedType, setSelectedType}) => {

    const types = ["all", "cardio", "strength", "flexibility"]
  return (
    <div className='d-flex justify-content-center  gap-2 mb-2'>
        {types.map((type)=>(
            <button
            key={type}
            className={`btn ${selectedType === type ? "btn-dark": "btn-outline-light"}`}
            onClick={()=> setSelectedType(type)}>
            {type}
            </button>
        ))}

    </div>
  )
}

export default ChallengeFilter