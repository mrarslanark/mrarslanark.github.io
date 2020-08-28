import React, { useState, useEffect } from "react";
import "../css/App.css";
import Intro from "./Intro";
import TechSkills from "./TechSkills";
import Career from "./Career";
import Divider from "./Divider";
import Projects from "./Projects";
import Design from "./Design";
import Social from "./Social";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <Intro />
      {data && <TechSkills techSkills={data.tech_skills} />}
      <Divider />
      {data && <Career career={data.career} />}
      <Divider />
      {data && <Projects projects={data.projects} />}
      <Divider />
      {data && <Design design={data.designs} />}
      <br />
      <br />
      {data && <Social social={data} />}
    </div>
  );
};

export default App;
