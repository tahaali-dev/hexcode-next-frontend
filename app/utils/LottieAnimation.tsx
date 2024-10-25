// components/LottieAnimation.js
import React, { useState } from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ animationData, loop = false, isPlaying }: any) => {
  const defaultOptions = {
    loop: loop,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isPaused={!isPlaying} />;
};

export default LottieAnimation;
