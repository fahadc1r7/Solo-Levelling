import React, { useState } from "react"
import { Link } from "react-router-dom"
import challenges from "../data/challenges.json"
import {
  getJoinedChallenges,
  leaveChallenge,
  getProgressLogs,
} from "../utils/localstorage"
import ProgressForm from "../components/ProgressForm"

const Dashboard = () => {
  const [joinedIds, setJoinedIds] = useState(getJoinedChallenges())
  const [refreshKey, setRefreshKey] = useState(0)
  const joinedList = challenges.filter((c) => joinedIds.includes(c.id))

  const handleLeave = (id) => {
    leaveChallenge(id)
    setJoinedIds(getJoinedChallenges())
  }

  const handleLog = () => {
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Your Dashboard</h1>

      {joinedList.length === 0 ? (
        <p className="text-center">
          You haven't joined any challenges yet.{" "}
          <Link to="/#challenges" className="btn btn-outline-primary">
            Browse Challenges
          </Link>
        </p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {joinedList.map((challenge) => {
            const logs = getProgressLogs(challenge.id)

            return (
              <div
                key={challenge.id}
                className="card m-2"
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{challenge.title}</h5>
                  <p className="card-text">Type: {challenge.type}</p>
                  <p className="card-text">Duration: {challenge.duration} days</p>

                  <Link
                    to={`/challenge/${challenge.id}`}
                    className="btn btn-outline-dark"
                  >
                    View Details
                  </Link>

                  <button
                    className="btn btn-outline-danger ms-2"
                    onClick={() => handleLeave(challenge.id)}
                  >
                    Leave
                  </button>

                  <hr />
                  <h5>Log Today's Progress</h5>
                  <ProgressForm challengeId={challenge.id} onLog={handleLog} />

                  {logs.length === 0 ? (
                    <p className="mt-2 small">No entries yet</p>
                  ) : (
                    <ul className="list-group mt-2">
                      {logs.map((log, i) => (
                        <li key={i} className="list-group-item small">
                          <strong>{log.date}</strong>: {log.note}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dashboard