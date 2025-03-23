"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function NavBar() {
  const [tabValue, setTabValue] = useState(1);

  function handleTabClick(value) {
    setTabValue(value);
  }
  return (
    <Tabs value={tabValue}>
      <Tab label="Jake Whittaker" value={1} onClick={handleTabClick(value)} />
      <Tab label="About" value={2} onClick={handleTabClick(value)} />
      <Tab label="Skills" value={3} onClick={handleTabClick(value)} />
      <Tab label="Projects" value={4} onClick={handleTabClick(value)} />
      <Tab label="Contact" value={5} onClick={handleTabClick(value)} />
      <Tab label="Resume" value={6} onClick={handleTabClick(value)} />
    </Tabs>
  );
}
