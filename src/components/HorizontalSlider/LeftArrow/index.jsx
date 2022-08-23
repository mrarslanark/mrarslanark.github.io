import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftShort } from "react-icons/bs";

export const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return isFirstItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollPrev()} className="projects-footer-container ">
      <BsArrowLeftShort color="#ffffff" size={"2em"} />
      <p>Prev</p>
    </div>
  );
};
