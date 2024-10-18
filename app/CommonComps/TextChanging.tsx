"use client";
// components/VerticalSlider.tsx
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { gsap, TimelineMax } from "gsap";

const SliderContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: relative;
`;

const SlideList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Slide = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slides = ["Next.js", "GSAP", "Emotion", "React", "TypeScript"];

const VerticalSlider: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideHeight = 50; // Same as the height defined in the styles
    const duration = 6; // Total duration for the animation cycle
    const numSlides = slides.length;

    const tl = new TimelineMax({
      repeat: -1, // Infinite repeat
      paused: false,
    });

    slides.forEach((_, i) => {
      tl.to(
        listRef.current,
        duration / numSlides,
        {
          y: i * -1 * slideHeight,
          ease: gsap.parseEase("elastic.out(1, 0.4)"), // Same Elastic ease
        },
        "+=0" // To ensure seamless transition between slides
      );
    });
  }, []);

  return (
    <SliderContainer>
      <SlideList ref={listRef}>
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
      </SlideList>
    </SliderContainer>
  );
};

export default VerticalSlider;
