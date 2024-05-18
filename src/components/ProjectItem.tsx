import React from "react";
import ChipsList from "./ChipsList";
import TextLink from "./TextLink";
import StoreBadges from "./StoreBadges";

interface ProjectItemProps {
  title: string;
  skills: string[];
  description: string;
  google?: string;
  apple?: string;
  web?: string;
  isLastItem: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  web,
  skills,
  apple,
  google,
  description,
  isLastItem,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 py-4 ${
        !isLastItem && "border-b-2 border-gray-200"
      }`}
    >
      <TextLink text={title} link={web} />
      <StoreBadges apple={apple} google={google} web={web} />
      <p>{description}</p>
      <ChipsList items={skills} />
    </div>
  );
};

export default ProjectItem;
