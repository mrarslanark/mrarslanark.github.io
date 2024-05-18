import { IAchievement } from "@/types/education";

const ActivityListItem: React.FC<IAchievement> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 my-2">
      <p className="font-semibold">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ActivityListItem;
