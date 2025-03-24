"use client";

import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import "../styles/NavBar.css";
import CustomTabPanel from "./CustomTabPanel";
import { JakeWhittaker } from "./JakeWhittaker";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";

export default function NavBar() {
  const [tabValue, setTabValue] = useState(1);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <main>
      <div className="navbar">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Jake Whittaker" value={0} />
            <Tab label="About" value={1} />
            <Tab label="Skills" value={2} />
            <Tab label="Projects" value={3} />
            <Tab label="Contact" value={4} />
            <Tab label="Resume" value={5} />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={tabValue} index={0}>
        <JakeWhittaker />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        <Skills />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={3}>
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={4}>
        <Contact />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={5}>
        <Resume />
      </CustomTabPanel>
    </main>
  );
}
