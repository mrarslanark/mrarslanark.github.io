import Lottie from "lottie-react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import loading from "../../assets/animations/loading.json";
import SliderFooter from "../HorizontalSlider/SliderFooter";
import "./styles.css";

const Skills = ({ skills = [] }) => {
  if (skills.length === 0) {
    return (
      <div className="projects-section-loading">
        <Lottie
          animationData={loading}
          loop={true}
          autoPlay={true}
          className="loading-animation"
        />
      </div>
    );
  }

  return (
    <section>
      <h1>Skills</h1>
      <div className="skills">
        <ScrollMenu
          Footer={SliderFooter}
          scrollContainerClassName="skills-scroll"
        >
          {skills.map((item) => {
            return <SkillItem key={item.id} item={item} />;
          })}
        </ScrollMenu>
      </div>
    </section>
  );
};

const SkillItem = ({ item }) => {
  return (
    <div className="item-skill-container">
      <h3>{item.title}</h3>
      <br />
      <p>
        {item.experience} {item.duration} of experience
      </p>
      <p>{item.projectsCount} projects</p>
      <hr className="line-divider" />
      <div className="item-skill-library-container">
        <p className="item-skill-library">{item.libraries.join(", ")}</p>
      </div>
    </div>
  );
};

export default Skills;
