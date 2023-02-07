import React from "react";
import styles from "@/styles/ProjectStatus.module.css";
import classNames from "classnames";

type ProjectStatusProps = {
  status: string;
};

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status }) => {
  return (
    <div className={classNames(styles.container, styles[status])}>
      <p>{status}</p>
    </div>
  );
};

export default ProjectStatus;
