import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import challenges from "../data/challenges.json";
import { joinedChallenge, isJoined } from "../utils/localstorage";

const ChallengeDetails = () => {
  const { id } = useParams();
  const challange = challenges.find((c) => c.id === parseInt(id));
  const [joined, setJoined] = useState(isJoined(parseInt(id)))

  if (!challange)
    return <h2 className="text-center mt-5">Challenges not found</h2>
  

  const handleJoin = () => {
  joinedChallenge(challange.id)
  setJoined(true)
  }

  return (
    <div className="container mt-5  mb-5 text-center">
      <div className="row">
        <div className="col-lg-6 text-center text-lg-start">
          <h1>{challange.title}</h1>
          <p>Type: {challange.type}</p>
          <p>Duration: {challange.duration}</p>
          <p>Benefits: {challange.benefits}</p>
          <button className="btn btn-outline-light btn-lg mt-3"
          onClick={handleJoin}
          disabled={joined}>

            {joined ? "Joined✓" :"Join challenge"}
          </button>
          <br />

          <Link to="/#challenges" className="btn btn-outline-danger  mb-3 mt-3">
            ← Back to Challenges
          </Link>
        </div>

        <div className="col-lg-6">
          <div className="row g-3 mt-lg-0">
            <div className="col-12">
              <div className="border rounded p-3">
                <h5>Daily Time</h5>
               <p>{challange.dailyTime}</p>
              </div>
            </div>

            <div className="col-12">
              <div className="border rounded p-3">
                <h5>Workouts</h5>
                <ul>
                  {challange.workouts.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12">
              <div className="border p-3">
                <h5>Equipment Needed</h5>
                <ul>
                  {challange.equipment.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
        </div>

      </div>

    </div>
  );
};

export default ChallengeDetails;
