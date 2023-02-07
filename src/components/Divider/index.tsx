import React from "react";
import styles from "@/styles/Divider.module.css";

type DividerProps = {
  direction: "horizontal" | "vertical";
};

const Divider: React.FC<DividerProps> = ({ direction }) => {
  return <div className={styles[direction]} />;
};

export default Divider;
