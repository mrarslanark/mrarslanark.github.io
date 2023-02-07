import { formatTimestamp, releasePrefix } from "@/constants/utils";
import ProjectStatus from "../ProjectStatus";

type ProjectInfoProps = {
  version: string;
  status: string;
  date: string;
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({ version, status, date }) => {
  return (
    <>
      <h2>v{version}</h2>
      <ProjectStatus status={status} />
      <p>
        {releasePrefix(date)}
        {formatTimestamp(date)}
      </p>
    </>
  );
};

export default ProjectInfo;
