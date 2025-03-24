"use client";

import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import "../styles/NavBar.css";
import CustomTabPanel from "./CustomTabPanel";

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
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={2}>
        Item Three
      </CustomTabPanel>
    </main>
  );
}
