import Divider from "../../Divider";
import styles from "@/styles/SkillItem.module.css";
import React from "react";
import classNames from "classnames";

export type SkillType = {
  id: string;
  title: string;
  libraries: string[];
  fullWidth?: boolean;
};

const SkillItem: React.FC<SkillType> = ({ title, libraries, fullWidth }) => {
  return (
    <div
      className={classNames(
        fullWidth ? styles.containerWithNoWith : styles.container
      )}
    >
      <h3>{title}</h3>
      <Divider direction="horizontal" />
      <div className={styles.libraries}>
        <p>{libraries.join(", ")}</p>
      </div>
    </div>
  );
};

export default SkillItem;
