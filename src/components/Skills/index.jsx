import HorizonSliderSection from "../HorizontalSliderSection";
import SkillItem from "../SkillItem";

import loading from "../../assets/animations/loading.json";

const Skills = ({ skills }) => {
  return (
    <HorizonSliderSection
      data={skills}
      emptyListAnimation={loading}
      subtitle={"Loading Arslan's Skills"}
      title={"Skills"}
      sectionId={"skills"}
    >
      {skills.map((skill) => (
        <SkillItem item={skill} key={skill.id} />
      ))}
    </HorizonSliderSection>
  );
};

export default Skills;
