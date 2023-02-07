import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftShort } from "react-icons/bs";
import styles from "@/styles/Arrow.module.css";

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  function handleClick() {
    scrollPrev();
  }

  return isFirstItemVisible ? (
    <div />
  ) : (
    <div onClick={handleClick} className={styles.container}>
      <BsArrowLeftShort className={styles.icon} size={"2em"} />
    </div>
  );
};

export default LeftArrow;
