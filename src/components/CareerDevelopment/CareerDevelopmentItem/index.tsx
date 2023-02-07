import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/CareerDevelopmentItem.module.css";
import Link from "next/link";
import classNames from "classnames";

type CareerDevelopmentLink = {
  id: string;
  to: string;
  title: string;
};

export type CareerDevelopmentType = {
  id: string;
  featuredImage: string;
  title: string;
  year: number;
  description: string;
  topic: string;
  links: CareerDevelopmentLink[] | null;
  fullWidth?: boolean;
};

const CareerDevelopmentItem: React.FC<CareerDevelopmentType> = ({
  featuredImage,
  title,
  topic,
  links,
  description,
  fullWidth,
}) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleDetailsToggle = () => setShowDetails((prevState) => !prevState);

  return (
    <div>
      <Image
        src={`/images/career_development/${featuredImage}`}
        width={400}
        height={200}
        alt={title}
        style={{ width: fullWidth ? "100%" : 400, height: 200 }}
        className={styles.featuredImage}
      />
      <div
        className={fullWidth ? styles.containerWithNoWidth : styles.container}
      >
        <div className={styles.headerContainer}>
          <h3>{title}</h3>
          {topic ? <p className={styles.topic}>{topic}</p> : null}
          <div className={styles.linkContainer}>
            {links
              ? links.map((link) => {
                  return (
                    <Link
                      target={"_blank"}
                      href={link.to}
                      rel="noreferrer"
                      key={link.id}
                    >
                      <span>{link.title}</span>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        <p
          className={
            showDetails ? styles.descriptionExtended : styles.description
          }
        >
          {description}
        </p>
        <button onClick={handleDetailsToggle} className={styles.showMore}>
          {showDetails ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default CareerDevelopmentItem;
