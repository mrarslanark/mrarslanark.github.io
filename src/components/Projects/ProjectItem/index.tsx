import { formatTimestamp } from "@/constants/utils";
import styles from "@/styles/ProjectItem.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export type ProjectLinkType = {
  id: string;
  title: string;
  url: string;
  description: string;
};

export type ProjectStackType = {
  fe: string[];
  be: string[];
  cs: string[];
  tools: string[];
};

export type ProjectSocialType = {
  id: string;
  url: string;
};

type ProjectReleaseType = {
  version: string;
  stack: ProjectStackType;
  functionality: string[];
  date: string;
  status: "production" | "development" | string;
  links: ProjectLinkType[];
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  icon: string;
  social: ProjectSocialType[];
  releases: ProjectReleaseType[];
  fullWidth?: boolean;
};

const ProjectItem: React.FC<ProjectType> = ({
  id,
  title,
  releases,
  description,
  icon,
  fullWidth,
}) => {
  const currentRelease = releases.find(
    (release) =>
      release.status === "production" || release.status === "discontinued"
  );

  return (
    <div
      className={classNames(
        fullWidth ? styles.containerWithNoWith : styles.container
      )}
    >
      <div>
        <div className={styles.headerContainer}>
          <Image
            src={`/images/projects/${icon}`}
            alt={title}
            width={50}
            height={50}
          />
          <div className={styles.headerContentContainer}>
            <div className={styles.header}>
              <h2>{title}</h2>
              <Link href={`/projects/${id}`}>
                Details <BsArrowRightShort size={24} />
              </Link>
            </div>
            <div className={styles.releaseContainer}>
              <p>
                v{currentRelease?.version ?? ""} Released on{" "}
                {formatTimestamp(currentRelease?.date ?? new Date().toString())}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.linkContainer}>
        {currentRelease &&
          currentRelease.links.map((link, index) => {
            return (
              <Link
                target={"_blank"}
                href={link.url}
                rel="noreferrer"
                key={link.id}
              >
                {link.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectItem;
