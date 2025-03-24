import React from "react";
import "../styles/Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <p className="skills-heading">Skills</p>
      <div>
        <p>Front End</p>
        <div className="skill-list">
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>React</p>
          <p>React Native</p>
          <p>Node</p>
          <p>Expo Go</p>
        </div>
      </div>
      <div>
        <p>Back End</p>
        <div className="skill-list">
          <p>SQL</p>
          <p>Postgres</p>
          <p>Supabase</p>
          <p>OAuth</p>
          <p>Web Sockets</p>
          <p>Express</p>
        </div>
      </div>
      <div>
        <p>Tools & Platforms</p>
        <div className="skill-list">
          <p>Render</p>
          <p>Netlify</p>
          <p>GitHub</p>
          <p>GitHub Actions</p>
        </div>
      </div>
    </div>
  );
};
