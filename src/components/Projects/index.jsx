import HorizonSliderSection from "../HorizontalSliderSection";

import loading from "../../assets/animations/loading.json";
import ProjectItem from "../ProjectItem";

const Projects = ({ projects }) => {
  return (
    <HorizonSliderSection
      ListItem={ProjectItem}
      data={projects}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Projects"}
      title={"Projects"}
      sectionId={"projects"}
    />
  );
};

export default Projects;
