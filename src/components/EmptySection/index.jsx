import Lottie from "lottie-react";
import React from "react";
import styled from "styled-components";

const EmptySection = ({ title, animation, subtitle }) => {
  return (
    <Section className="empty-section">
      <h1>{title}</h1>
      <Lottie
        style={{ marginBlock: 24 }}
        animationData={animation}
        loop={true}
        autoplay={true}
        className={"loading-animation"}
      />
      <p>{subtitle}</p>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default EmptySection;
