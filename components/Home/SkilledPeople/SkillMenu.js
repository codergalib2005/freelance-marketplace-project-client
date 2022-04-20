import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TopSkills from "./TopSkills";
import TrendingSkills from "./TrendingSkills";
import ProjectCatalog from "./ProjectCatalog";

export default function SkillMenu() {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <>
      <div className="grid justify-items-center">
        <Tabs value={value} onChange={handleTabs}>
          <Tab label=" Top skills" />
          <Tab label="Trending skills" />
          <Tab label="Project Catalog" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TopSkills />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TrendingSkills />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectCatalog />
        </TabPanel>
      </div>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{index === value && <div>{children}</div>}</div>;
}
