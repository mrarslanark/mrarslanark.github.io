import React from "react";

import loading from "../../assets/animations/loading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="projects-section-loading">
      <Lottie
        animationData={loading}
        loop={true}
        autoPlay={true}
        className="loading-animation"
      />
    </div>
  );
};

export default Loading;
