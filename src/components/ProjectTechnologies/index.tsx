import { ProjectStackType } from "../Projects/ProjectItem";
import styles from "@/styles/ProjectTechnologies.module.css";
import { stackTitleGenerator } from "@/constants/utils";

type TechnologiesProps = {
  stack: ProjectStackType;
};

const ProjectTechnologies: React.FC<TechnologiesProps> = ({ stack }) => {
  return (
    <div>
      <h2>Technologies</h2>
      <p className={styles.description}>
        Techologies used to built the product.
      </p>
      <div className={styles.listContainer}>
        {Object.entries(stack).map(([key, value]) => {
          if (value.length === 0) {
            return null;
          }

          return (
            <div key={key}>
              <h3>{stackTitleGenerator(key)}</h3>
              <p>{value.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTechnologies;
