import HorizonSliderSection from "../HorizontalSliderSection";
import SkillItem from "../SkillItem";

import loading from "../../assets/animations/loading.json";

const Skills = ({ skills }) => {
  return (
    <HorizonSliderSection
      ListItem={SkillItem}
      data={skills}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Skills"}
      title={"Skills"}
      sectionId={"skills"}
    />
  );
};

export default Skills;
