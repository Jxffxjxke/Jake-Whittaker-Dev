import React from "react";
import { ProjectCard } from "./ProjectCard";
import "../styles/Main.css";

const projects = [
  {
    cardHeader: "Events Platform",
    cardContent: "TypeScript | React Native | Supabase | Expo",
    hostedURL:
      "https://expo.dev/preview/update?message=Update%20packages&updateRuntimeVersion=1.0.0&createdAt=2025-01-12T15%3A32%3A56.093Z&slug=exp&projectId=859ea1e6-42b9-4433-9b71-6ff3fe7d72d4&group=4ed37667-c88f-4178-bae2-c79a1bb14f41",
    githubURL: "https://github.com/Jxffxjxke/Events-Platform",
  },
];

export const Projects = () => {
  return (
    <main className="main">
      <ProjectCard project={projects[0]} />
    </main>
  );
};
