/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import Image from "next/image"; // Import Next.js Image component
import { useIntersectionObserver } from "../customHooks/testimonials";

const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 10;

const TimerWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const BaseTimer = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
`;

const SvgWrapper = styled.svg`
  transform: scaleX(-1);
  position: absolute;
  top: 0;
  left: 0;
`;

const PathElapsed = styled.circle`
  fill: none;
  stroke: #eae1e1;
  stroke-width: 4px;
`;

const PathRemaining = styled.path`
  fill: none;
  stroke-width: 4px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  stroke: url(#gradient); /* Apply gradient color */
  transition: 1s linear all;
`;

const CenterImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden; /* Ensures image stays circular */
  width: 48px; /* Adjust size as needed */
  height: 48px;
`;

const ProfileRingTimer = ({
  imageSrc,
  alt,
  testimonialsRef,
}: {
  imageSrc: string;
  alt: string;
  testimonialsRef: any;
}) => {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  // Use the custom hook for visibility tracking
  const isVisible = useIntersectionObserver(testimonialsRef);

  // Start the timer when the component is visible
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };

  const strokeDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;

  return (
    <TimerWrapper>
      <BaseTimer>
        <SvgWrapper viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Define gradient for the stroke */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="maroon" />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs>
          <PathElapsed cx="50" cy="50" r="45" />
          <PathRemaining
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
            strokeDasharray={strokeDasharray}
          />
        </SvgWrapper>
        {/* Image Positioned in Center */}
        <CenterImage>
          <Image
            src={imageSrc}
            alt={alt}
            layout="fill" /* Ensures it fills the CenterImage div */
            objectFit="cover" /* Ensures the image scales properly */
          />
        </CenterImage>
      </BaseTimer>
    </TimerWrapper>
  );
};

export default ProfileRingTimer;
