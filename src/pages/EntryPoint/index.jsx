import "./styles.css";
import React from "react";
import SocialSection from "../../components/SocialSection";

const App = () => {
  return (
    <div className={"container"}>
      <div className={"content-container"}>
        <h1 className={"name"}>Arslan Mushtaq</h1>
        <p>
          Software engineer with experience of 11+ years in the field of
          Software Development and Architecture Building. Passionate about
          working within a multidisciplinary team to expand and share my
          experience and learnings in software development. My core expertise
          include <strong>ReactJS</strong>, <strong>React Native</strong>, and{" "}
          <strong>NodeJS</strong>.
        </p>
        <p>
          Currently, I am working on developing an extraordinary portfolio so
          bear with me until <strong>September 1, 2022</strong>.
        </p>
        <SocialSection />
      </div>
    </div>
  );
};

export default App;
