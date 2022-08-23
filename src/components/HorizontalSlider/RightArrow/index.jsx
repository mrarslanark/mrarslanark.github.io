import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowRightShort } from "react-icons/bs";

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return isLastItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollNext()} className="projects-footer-container ">
      <p>Next</p>
      <BsArrowRightShort color="#ffffff" size={"2em"} />
    </div>
  );
};
