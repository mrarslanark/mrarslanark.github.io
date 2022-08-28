import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowRightShort } from "react-icons/bs";
import styled from "styled-components";

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return isLastItemVisible ? (
    <div />
  ) : (
    <Container onClick={() => scrollNext()}>
      <Arrow size={"2em"} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.item_container_bg};
  padding: 0px 24px;
  height: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.item_container_bg_hover};
    cursor: pointer;
  }
`;

const Arrow = styled(BsArrowRightShort)`
  color: ${({ theme }) => theme.icon_color};
`;
