import Section from "@/components/Container";
import ProjectItem from "@/components/ProjectItem";
import projects from "@/data/projects.json";
import Link from "next/link";
import React from "react";
import { SectionHeadingProps } from "./SectionHeading";

const header: SectionHeadingProps = {
  heading: "Personal Projects",
  seeAllLink: "/projects",
  subtitle: "Projects I have work on during my free time.",
  showSeeAll: true,
};

interface PersonalProjectsProps {
  limit?: number;
  showSeeAll?: boolean;
  showHomeBtn?: boolean;
}

const PersonalProjects: React.FC<PersonalProjectsProps> = ({
  limit,
  showSeeAll = true,
  showHomeBtn,
}) => {
  let data = projects;
  if (limit) {
    data = projects.slice(0, limit);
  }

  return (
    <Section invert header={header} showHomeBtn={showHomeBtn}>
      {data.map((project, index) => {
        return (
          <ProjectItem
            key={project.id}
            {...project}
            isLastItem={index === data.length - 1}
          />
        );
      })}
    </Section>
  );
};

export default PersonalProjects;
