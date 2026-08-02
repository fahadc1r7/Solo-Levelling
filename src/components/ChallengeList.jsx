import React from "react";
import challenges from "../data/challenges.json";
import ChallengeCard from "./ChallengeCard";
const ChallengeList = () => {
  return (
    <div className="d-flex  justify-content-center flex-wrap">
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
