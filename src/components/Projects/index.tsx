import styles from "@/styles/Slider.module.css";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Section from "../Section";
import SliderFooter from "../Section/SliderFooter";
import Loading from "../Loading";
import ProjectItem, { ProjectType } from "./ProjectItem";

type ProjectsProps = {
  data: ProjectType[];
};

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <Section
      seeAllURL="/projects"
      title={"Projects"}
      sectionId={"projects"}
      showSeeAll={true}
    >
      <ScrollMenu
        Footer={SliderFooter}
        scrollContainerClassName={styles.slider}
        itemClassName={styles.item}
      >
        {data.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </ScrollMenu>
    </Section>
  );
};

export default Projects;
