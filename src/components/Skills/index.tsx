import styles from "@/styles/Slider.module.css";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Section from "../Section";
import SliderFooter from "../Section/SliderFooter";
import SkillItem, { SkillType } from "./SkillItem";

type SkillsProps = {
  data: SkillType[];
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <Section
      showSeeAll={true}
      seeAllURL={"/skills"}
      sectionId="skills"
      title="Skills"
    >
      <ScrollMenu
        Footer={SliderFooter}
        scrollContainerClassName={styles.slider}
        itemClassName={styles.item}
      >
        {data.map((item) => {
          return <SkillItem key={item.id} {...item} />;
        })}
      </ScrollMenu>
    </Section>
  );
};

export default Skills;
