import IconGenerator from "@/components/IconGenerator";
import styles from "@/styles/CertificationItem.module.css";
import Link from "next/link";
import React from "react";

export type CertificationItemType = {
  id: string;
  title: string;
  url: string;
  provider: string;
  by: string;
  date: string;
  fullWidth?: boolean;
};

const CertificationItem: React.FC<CertificationItemType> = ({
  title,
  url,
  provider,
  by,
  date,
  fullWidth,
}) => {
  return (
    <Link href={url} target={"_blank"} referrerPolicy={"no-referrer"}>
      <div
        className={fullWidth ? styles.containerWithNoWidth : styles.container}
      >
        <div className={styles.byContainer}>
          <IconGenerator id={by} />
          <h3>{by}</h3>
        </div>
        <h4>{title}</h4>
        <div>
          <p>
            {provider} | {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CertificationItem;
