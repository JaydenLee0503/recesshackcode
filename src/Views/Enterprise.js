import React from "react";
import "./Enterprise.css";
import Jayden from "../assets/images/Jayden_Picture.png";
import Rishabh from "../assets/images/Rishabh_Picture.png";

const Enterprise = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet the Team Behind the Facts</h2>
        <p className="team-subtitle">
          We’re a small, focused team building the most accurate fact-checking
          tools powered by AI.
        </p>

        <div className="team-grid">
          {/* Jayden */}
          <div className="team-card">
            <img src={Jayden} alt="Jayden Lee" className="team-image" />
            <h3 className="team-name">Jayden Lee</h3>
            <p className="team-role">Co-Founder & Frontend Developer</p>
            <p className="team-bio">
              Jayden designs and builds the user experience. He ensures the
              interface is fast, intuitive, and easy for anyone to verify facts.
            </p>
          </div>

          {/* Rishabh */}
          <div className="team-card">
            <img src={Rishabh} alt="Rishabh Mittal" className="team-image" />
            <h3 className="team-name">Rishabh Mittal</h3>
            <p className="team-role">Co-Founder & Backend Engineer</p>
            <p className="team-bio">
              Rishabh builds the infrastructure that powers FactGPT and Gemini.
              He focuses on scalable, efficient systems and trustworthy AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
