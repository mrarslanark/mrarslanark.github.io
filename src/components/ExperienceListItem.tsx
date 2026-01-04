import { IExperience } from "@/types/experience";
import { FaCircle } from "react-icons/fa";
import ItemHeader from "./ItemHeader";

const ExperienceListItem: React.FC<IExperience> = ({
  title,
  location_type,
  company,
  start_date,
  end_date,
  achievements,
}) => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <ItemHeader
        topLeftText={title}
        topRightText={location_type}
        bottomLeftText={company}
        bottomRightText={`${start_date} - ${end_date}`}
      />
      <div className="flex flex-col gap-3">
        <ul className="flex flex-col gap-2">
          {achievements.map((achievement) => {
            return (
              <li key={achievement} className="flex gap-2 font-light">
                <div>
                  <FaCircle size={6} className="mt-2 text-black" />
                </div>{" "}
                {achievement}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceListItem;
