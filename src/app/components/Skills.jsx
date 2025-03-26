import React from "react";
import "../styles/Skills.css";

export const Skills = () => {
  return (
    <main className="skills-container main">
      <div>
        <h2>Front End</h2>
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
        <h2>Back End</h2>
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
        <h2>Tools & Platforms</h2>
        <div className="skill-list">
          <p>Render</p>
          <p>Netlify</p>
          <p>GitHub</p>
          <p>GitHub Actions</p>
        </div>
      </div>
    </main>
  );
};
