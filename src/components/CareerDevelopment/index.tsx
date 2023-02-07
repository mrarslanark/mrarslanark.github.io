import styles from "@/styles/Slider.module.css";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Section from "../Section";
import SliderFooter from "../Section/SliderFooter";
import CareerDevelopmentItem, {
  CareerDevelopmentType,
} from "./CareerDevelopmentItem";

type CareerDevelopmentProps = {
  data: CareerDevelopmentType[];
};

const CareerDevelopment: React.FC<CareerDevelopmentProps> = ({ data }) => {
  return (
    <Section
      showSeeAll={true}
      seeAllURL={"/career_development"}
      sectionId="career_development"
      title="Career Development"
    >
      <ScrollMenu
        Footer={SliderFooter}
        scrollContainerClassName={styles.slider}
        itemClassName={styles.item}
      >
        {data.map((achievement) => {
          return (
            <CareerDevelopmentItem key={achievement.id} {...achievement} />
          );
        })}
      </ScrollMenu>
    </Section>
  );
};

export default CareerDevelopment;
