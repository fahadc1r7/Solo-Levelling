import React from "react";

const Hero = () => {
  const scrollChallenges = () => {
    document.getElementById("challenges").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="position-relative d-flex flex-column justify-content-center align-items-center text-center overflow-hidden"
      style={{
        height: "100vh",
      }}
    >

      <video
      autoPlay
      loop
      muted
      playsInline
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{objectFit:"cover", zIndex:0}}>
       <source src="/public/sung-jinwoo-shadow-army-solo-leveling-moewalls-com.mp4" type="video/mp4"/></video>


      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      ></div>

      <div className="position-relative text-white px-3">
        <h1
          className="display-2 fw-bold"
          style={{
            color: "#f4f4f5",
            textShadow:
              "0 0 10px #4dd8ff, 0 0 20px #4dd8ff, 0 0 40px #1e90ff, 0 0 80px #1e90ff",
          }}
        >
          Arise. Train. Level Up
        </h1>
        <p className="lead mt-3 fst-italic">
          "The weak have no choice but to grow stronger."
        </p>

        <p className="mt-2" style={{ maxWidth: "600px", margin: "0 auto"}}>
          Track fitness challenges, log your daily progress, and compete on
          leaderboards. Every day is a chance to level up.
        </p>

        <button
          className="btn btn-outline-light btn-lg mt-4"
          onClick={scrollChallenges}
        >
          Browse Challenges ↓
        </button>
      </div>
    </div>
  );
};

export default Hero;
