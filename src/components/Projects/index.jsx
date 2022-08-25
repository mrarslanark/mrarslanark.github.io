import HorizonSliderSection from "../HorizontalSliderSection";

import loading from "../../assets/animations/loading.json";
import ProjectItem from "../ProjectItem";

const Skills = ({ projects }) => {
  return (
    <HorizonSliderSection
      ListItem={ProjectItem}
      data={projects}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Projects"}
      title={"Projects"}
    />
  );
};

export default Skills;
