import { IExperience } from "@/types/experience";
import { FaCircle } from "react-icons/fa";

const ExperienceListItem: React.FC<IExperience> = ({
  title,
  location_type,
  company,
  start_date,
  end_date,
  responsibilities,
}) => {
  return (
    <div className="flex flex-col gap-4 my-4">
      <div>
        <div className="flex flex-wrap justify-between">
          <p className="font-semibold text-lg">{title}</p>
          <p>{location_type}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <p>{company}</p>
          <p>
            {start_date} - {end_date}
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {responsibilities.map((responsibility) => {
            return (
              <li key={responsibility} className="flex gap-2 font-light">
                <FaCircle size={8} className="mt-2 text-gray-400" />{" "}
                {responsibility}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceListItem;
