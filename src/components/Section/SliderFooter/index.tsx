import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
import styles from "@/styles/SliderFooter.module.css";

const SliderFooter = () => {
  return (
    <div className={styles.container}>
      <LeftArrow />
      <RightArrow />
    </div>
  );
};

export default SliderFooter;
