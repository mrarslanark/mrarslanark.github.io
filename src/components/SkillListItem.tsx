import { ISkill } from "@/types/skill";
import ChipsList from "./ChipsList";
import TextLink from "./TextLink";

const SkillListItem: React.FC<ISkill> = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <TextLink text={title} />
      <ChipsList items={skills} />
    </div>
  );
};

export default SkillListItem;
