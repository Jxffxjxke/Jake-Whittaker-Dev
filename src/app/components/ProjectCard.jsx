import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";

const handleClick = (link) => {
  console.log("folowed link");

  window.open(link, "_blank");

  console.log("window opened");
};

export const ProjectCard = ({ project }) => {
  const { cardHeader, cardContent, hostedURL, githubURL } = project;

  return (
    <Card>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardActions>
        {hostedURL && (
          <Button onClick={() => handleClick(hostedURL)}>Hosted Version</Button>
        )}
        <Button onClick={() => handleClick(githubURL)}>GitHub Code</Button>
      </CardActions>
    </Card>
  );
};
