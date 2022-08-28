import React from "react";
import styled from "styled-components";

import { LeftArrow } from "../LeftArrow";
import { RightArrow } from "../RightArrow";

const SliderFooter = () => {
  return (
    <Container>
      <LeftArrow />
      <RightArrow />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0px;
  height: 50px;
`;

export default SliderFooter;
