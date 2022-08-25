import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftShort } from "react-icons/bs";
import styled from "styled-components";

export const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return isFirstItemVisible ? (
    <div />
  ) : (
    <Container onClick={() => scrollPrev()}>
      <Arrow size={"2em"} />
      <p>Prev</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${({ theme }) => theme.item_container_bg};
  width: 100px;
  height: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.item_container_bg_hover};
    cursor: pointer;
  }
`;

const Arrow = styled(BsArrowLeftShort)`
  color: ${({ theme }) => theme.icon_color};
`;
