import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

import EmptySection from "../EmptySection";
import Loading from "../Loading";
import SliderFooter from "./SliderFooter";

const HorizonSliderSection = ({
  title,
  data,
  emptyListAnimation,
  subtitle,
  sectionId,
  children,
}) => {
  if (!data) {
    return <Loading />;
  }

  if (data.length === 0) {
    return (
      <EmptySection
        animation={emptyListAnimation}
        title={title}
        subtitle={subtitle}
      />
    );
  }

  return (
    <section id={sectionId}>
      <h1>{title}</h1>
      <Section>
        <ScrollMenu Footer={SliderFooter} scrollContainerClassName="scroll">
          {children}
        </ScrollMenu>
      </Section>
    </section>
  );
};

const Section = styled.div`
  margin: 12px 0px;
`;

export default HorizonSliderSection;
