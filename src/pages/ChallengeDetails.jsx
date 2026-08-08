import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import challenges from "../data/challenges.json"
import workoutsData from "../data/workouts.json"
import { joinedChallenge, isJoined } from "../utils/localstorage"

const ChallengeDetails = () => {
  const { id } = useParams();
  const challange = challenges.find((c) => c.id === parseInt(id))
  const [joined, setJoined] = useState(isJoined(parseInt(id)))

  if (!challange)
    return <h2 className="text-center mt-5">Challenge not found</h2>

  const workoutDetails = challange.workouts.map((wId) =>
    workoutsData.find((w) => w.id === wId)
  );

  const handleJoin = () => {
    joinedChallenge(challange.id)
    setJoined(true);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-5 mb-4">
          <div className="card card-solo p-4 mb-4 text-center">
            <h1 className="text-accent">{challange.title}</h1>
            <p className="mb-1">
              <span className="badge bg-secondary me-2">{challange.type}</span>
              <span className="badge bg-secondary">{challange.duration} days</span>
            </p>
            <button
              className="btn btn-outline-light mt-3 mx-auto"
              style={{ maxWidth: "220px" }}
              onClick={handleJoin}
              disabled={joined}
            >
              {joined ? "Joined ✓" : "Join Challenge"}
            </button>
          </div>

          {/* Rules & Equipment side by side */}
          <div className="row mb-3">
            <div className="col-6">
              <div className="card card-solo p-3 h-100">
                <h5 className="text-accent">
                  <i className="bi bi-list-check me-2"></i>Rules
                </h5>
                <p className="mb-0 small">{challange.rules}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="card card-solo p-3 h-100">
                <h5 className="text-accent">
                  <i className="bi bi-tools me-2"></i>Equipment
                </h5>
                <ul className="list-unstyled mb-0 small">
                  {challange.equipment.map((e, i) => (
                    <li key={i}>
                      <i className="bi bi-dot"></i>{e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card card-solo p-3 mb-3">
            <h5 className="text-accent">
              <i className="bi bi-star-fill me-2"></i>Benefits
            </h5>
            <p className="mb-0">{challange.benefits}</p>
          </div>

          <div className="card card-solo p-3 mb-3 text-center">
            <h5 className="text-accent">
              <i className="bi bi-clock me-2"></i>Daily Time
            </h5>
            <p className="mb-0">{challange.dailyTime}</p>
          </div>

          <div className="text-center">
            <Link to="/#challenges" className="btn btn-outline-danger">
              ← Back to Challenges
            </Link>
          </div>
        </div>

        {/* Right Column - Workouts */}
        <div className="col-lg-7">
          <h4 className="text-accent mb-3">
            <i className="bi bi-lightning-charge me-2"></i>Workouts
          </h4>
          <div className="row mb-4">
            {workoutDetails.map((w, i) => (
              <div key={i} className="col-6 col-md-6 mb-3">
                <div className="card card-solo overflow-hidden position-relative">
                  <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                    <img
                      src={`/workouts/${w.image}`}
                      alt={w.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-2 text-center">
                    <p className="mb-1 fw-bold small">{w.name}</p>
                    <p className="mb-0 small">
                      <i className="bi bi-arrow-repeat me-1"></i>{w.sets}
                    </p>
                    <p className="mb-0 small">
                      <i className="bi bi-clock me-1"></i>{w.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengeDetails