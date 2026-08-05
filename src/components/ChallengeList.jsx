import React from "react";
import challenges from "../data/challenges.json";
import ChallengeCard from "./ChallengeCard";

const ChallengeList = ({selectedType}) => {
  const filtered = selectedType === "all"
  ? challenges
  : challenges.filter((c) => c.type === selectedType)
  return (
    <div className="d-flex  justify-content-center flex-wrap">
      {filtered.map((challenge) => (
        <ChallengeCard key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
};

export default ChallengeList;
