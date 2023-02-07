import styles from "@/styles/ProjectFunctionalities.module.css";

type ProjectFunctionalitiesProps = {
  functionality: string[];
};

const ProjectFunctionalities: React.FC<ProjectFunctionalitiesProps> = ({
  functionality,
}) => {
  return (
    <div>
      <h2>Functionalities</h2>
      <p className={styles.description}>
        Specific features and capabilities that this product offers to its
        users.
      </p>
      <div className={styles.listContainer}>
        {functionality.length > 0 ? (
          functionality.map((functionality, index) => {
            return (
              <p key={functionality}>
                {index + 1}. {functionality}
              </p>
            );
          })
        ) : (
          <p>
            Updated functionalities will be posted when version is in production
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectFunctionalities;
