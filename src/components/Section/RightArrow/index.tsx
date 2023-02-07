import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "@/styles/Arrow.module.css";

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  function handleClick() {
    scrollNext();
  }

  return isLastItemVisible ? (
    <div />
  ) : (
    <div onClick={handleClick} className={styles.container}>
      <BsArrowRightShort className={styles.icon} size={"2em"} />
    </div>
  );
};

export default RightArrow;
