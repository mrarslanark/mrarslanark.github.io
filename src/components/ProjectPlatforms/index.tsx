import styles from "@/styles/ProjectPlatforms.module.css";
import Link from "next/link";
import IconGenerator from "../IconGenerator";
import { ProjectLinkType } from "../Projects/ProjectItem";

type PlatformsProps = {
  links: ProjectLinkType[];
};

const ProjectPlatforms: React.FC<PlatformsProps> = ({ links }) => {
  return (
    <div>
      <h2>Platforms</h2>
      <p className={styles.description}>
        Platforms this product is available on
      </p>
      {links.length > 0 ? (
        <div className={styles.linksContainer}>
          {links.map((release) => {
            return (
              <Link
                href={release.url}
                className={styles.linkItemContainer}
                key={release.id}
                target={"_blank"}
                referrerPolicy={"no-referrer"}
              >
                <IconGenerator id={release.id} />
                <div>
                  <h3>{release.title}</h3>
                  <p>{release.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p>
          Currently, no platforms are available as the product is in development
        </p>
      )}
    </div>
  );
};

export default ProjectPlatforms;
