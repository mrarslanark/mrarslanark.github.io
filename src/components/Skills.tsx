import skills from "@/data/skills.json";
import { PageProps } from "@/types/page";
import React from "react";
import Section from "./Container";
import { SectionHeadingProps } from "./SectionHeading";
import SkillListItem from "./SkillListItem";

const header: SectionHeadingProps = {
  heading: "Skills",
  seeAllLink: "/skills",
  subtitle: "Skills I use frequently during my development.",
  showSeeAll: true,
};

const Skills: React.FC<PageProps> = ({ limit, showHome }) => {
  let data = skills;
  if (limit) {
    data = skills.slice(0, limit);
  }

  return (
    <Section header={header} showHomeBtn={showHome}>
      {data.map((skill) => {
        return <SkillListItem key={skill.id} {...skill} />;
      })}
    </Section>
  );
};

export default Skills;
