import Lottie from "lottie-react";
import React from "react";

import styles from "@/styles/Loader.module.css";
import animation from "@/assets/animations/loader.json";

const Loading: React.FC = () => {
  return (
    <div>
      <Lottie
        className={styles.loader}
        animationData={animation}
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
