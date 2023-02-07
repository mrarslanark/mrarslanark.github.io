import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Section from "../Section";
import SliderFooter from "../Section/SliderFooter";
import styles from "@/styles/Slider.module.css";
import React, { useContext } from "react";
import CertificationItem, { CertificationItemType } from "./CertificationItem";

type CertificationsType = {
  data: CertificationItemType[];
};

const CertificationsList: React.FC<CertificationsType> = ({ data }) => {
  return (
    <Section
      showSeeAll={true}
      seeAllURL={"/certifications"}
      sectionId="certifications"
      title="Certifications"
    >
      <ScrollMenu
        Footer={SliderFooter}
        scrollContainerClassName={styles.slider}
        itemClassName={styles.item}
      >
        {data.map((certification) => {
          return (
            <CertificationItem key={certification.id} {...certification} />
          );
        })}
      </ScrollMenu>
    </Section>
  );
};

export default CertificationsList;
