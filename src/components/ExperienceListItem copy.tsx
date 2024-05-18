import { IEducation } from "@/types/education";
import ItemHeader from "./ItemHeader";
import ActivityListItem from "./ActivityListItem";

const EducationListItem: React.FC<IEducation> = ({
  title,
  institute,
  address,
  start_year,
  end_year,
  achievements,
}) => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <ItemHeader
        topLeftText={title}
        topRightText={address}
        bottomLeftText={institute}
        bottomRightText={`${start_year} - ${end_year}`}
      />
      <p className="text-lg font-semibold text-gray-400">Achievements</p>
      {achievements.map((achievement) => {
        return <ActivityListItem key={achievement.title} {...achievement} />;
      })}
    </div>
  );
};

export default EducationListItem;
