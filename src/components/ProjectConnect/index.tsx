import { ProjectType } from "../Projects/ProjectItem";
import styles from "@/styles/ProjectConnect.module.css";
import Link from "next/link";
import IconGenerator from "../IconGenerator";
import { HiExternalLink } from "react-icons/hi";

type ProjectConnectProps = {
  project: ProjectType;
};

const ProjectConnect: React.FC<ProjectConnectProps> = ({ project }) => {
  return (
    <div className={styles.connect}>
      <h3>Connect with {project.title}</h3>
      {project.social.map((socialLink) => {
        return (
          <Link
            href={socialLink.url}
            target={"_blank"}
            referrerPolicy={"no-referrer"}
            key={socialLink.id}
            className={styles.itemContainer}
          >
            <div>
              <IconGenerator id={socialLink.id} size={"medium"} />
              <p>{socialLink.id}</p>
            </div>
            <HiExternalLink color="white" />
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectConnect;
