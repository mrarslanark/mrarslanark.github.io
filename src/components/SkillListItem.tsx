import ChipsList from "./ChipsList";
import TextLink from "./TextLink";

interface SkillListItemProps {
  title: string;
  skills: string[];
}

const SkillListItem: React.FC<SkillListItemProps> = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <TextLink text={title} />
      <ChipsList items={skills} />
    </div>
  );
};

export default SkillListItem;
