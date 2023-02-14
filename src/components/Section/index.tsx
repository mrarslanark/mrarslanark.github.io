import styles from "@/styles/HSliderSection.module.css";
import Link from "next/link";
import { PropsWithChildren } from "react";

type SectionProps = {
  title: string;
  sectionId: string;
  seeAllURL?: string;
  showSeeAll: boolean;
};

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  title,
  sectionId,
  children,
  seeAllURL,
  showSeeAll,
}) => {
  return (
    <section className={styles.container} id={sectionId}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {showSeeAll && <Link href={seeAllURL ?? ""}>See All</Link>}
      </div>
      <div className={styles.slider}>{children}</div>
    </section>
  );
};

export default Section;
