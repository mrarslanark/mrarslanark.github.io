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
      className={`flex flex-col gap-y-2 py-4 ${
        !isLastItem && "border-b-2 border-gray-200"
      }`}
    >
      <div className="flex">
        <div className="flex flex-1 flex-col gap-y-2">
          <TextLink text={title} link={web} />
          <ChipsList items={skills} />
        </div>
        <StoreBadges apple={apple} google={google} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;
