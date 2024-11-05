"use client";
import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import clientLove from "../../../public/basics/clientLove.svg";
import clientPhoto from "../../../public/basics/clientphoto.svg";
import { DashedContainer } from "@/app/styledComps/containers";
import { HexSectionName, SectionTitle } from "@/app/styledComps/texts";
import { SliderLoveCard } from "@/app/styledComps/cards";
import gsap from "gsap";

// Main Slider Component
const SliderOfLove = () => {
  const sliderRef: any = useRef(null); // Reference to slider container
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [startX, setStartX] = useState(0); // Track starting X position
  const [scrollLeft, setScrollLeft] = useState(0); // Track initial scroll position
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current card index
  const [numOfCards, setNumOfCards] = useState(0); // Store number of cards in the slider
  const [showCursor, setShowCursor] = useState(false); // Control custom cursor visibility

  // Calculate number of cards in slider on component mount
  useEffect(() => {
    setNumOfCards(
      sliderRef.current ? sliderRef.current.children.length - 1 : 0
    );
  }, []);

  // Custom cursor animation using GSAP
  useEffect(() => {
    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    // GSAP animation to smoothly follow cursor
    const updateCursor = gsap.to("#custom-cursor", {
      duration: 0.01,
      ease: "power3.out",
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;

        gsap.set("#custom-cursor", {
          css: { left: posX - 1, top: posY - 2 },
        });
      },
    });

    // Update mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    sliderRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      sliderRef.current?.removeEventListener("mousemove", handleMouseMove);
      updateCursor.kill(); // Cleanup GSAP animation
    };
  }, []);

  // Handle mouse down for drag functionality
  const handleMouseDown = (e: any) => {
    if (window.innerWidth > 768) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft); // Track starting position
      setScrollLeft(sliderRef.current.scrollLeft); // Set initial scroll position
      gsap.to("#custom-cursor", { scale: 1.5 }); // Scale cursor on grab
    }
  };

  // Handle mouse movement for dragging
  const handleMouseMove = (e: any) => {
    if (window.innerWidth > 768) {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle mouse release and leave
  const handleMouseUpOrLeave = () => {
    if (window.innerWidth > 768) {
      setIsDragging(false);
      gsap.to("#custom-cursor", { scale: 1 }); // Reset cursor size
    }
    const sliderWidth = sliderRef.current.offsetWidth;
    const scrollPos = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / sliderWidth); // Calculate current card index
    setCurrentIndex(newIndex); // Update card index
  };

  // Handle scroll to update active dot indicator
  const handleScroll = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    const scrollPos = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / sliderWidth); // Calculate current card index
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        {/* Heading Section */}
        <SliderHeadingWrapper>
          <HexSectionName title="THE SLIDER OF LOVE" />
          <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
            Hear it from our partners
          </SectionTitle>
        </SliderHeadingWrapper>
      </DashedContainer>

      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        {/* Custom Cursor */}
        {showCursor && (
          <CustomCursor id="custom-cursor">
            <CursorText>Scroll</CursorText>
          </CustomCursor>
        )}

        {/* Slider Section */}
        <SliderLoveWrapper
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setShowCursor(false);
          }}
          onMouseEnter={() => window.innerWidth > 768 && setShowCursor(true)}
          onScroll={handleScroll}
        >
          {/* Slider Cards */}
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderLoveCard
              key={index} // Ensure each component has a unique key
              banner={clientLove}
              clientName="Lalit Bihani"
              clientPhoto={clientPhoto}
              clientPosition="Co-founder of Volt"
            />
          ))}
          <div className="overlay m-none"></div>
        </SliderLoveWrapper>
      </DashedContainer>

      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        {/* Dots for mobile navigation */}
        <SliderDotsWrapper>
          {Array.from({ length: numOfCards }).map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </SliderDotsWrapper>
      </DashedContainer>
    </>
  );
};

export default SliderOfLove;

// Styled components for custom cursor
const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background-color: var(--clr-primary);
  z-index: 9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CursorText = styled.span`
  font-size: 20px;
  color: var(--white-color);
`;

// Styled components for headings
const SliderHeadingWrapper = styled.div`
  padding: 62px 0px;

  @media (max-width: 768px) {
    padding: 32px 0px;
  }
`;

// Styled component for slider wrapper
const SliderLoveWrapper = styled.div`
  padding: 4px;
  display: flex;
  gap: 26px;
  overflow-x: auto;
  flex-wrap: nowrap;
  scroll-behavior: smooth;

  .overlay {
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    flex: 0 0 calc((100% - 52px) / 3);

    @media (max-width: 1024px) {
      flex: 0 0 calc((100% - 52px) / 2);
    }

    @media (max-width: 768px) {
      flex: 0 0 100%;
    }
  }

  @media (max-width: 1440px) {
    max-width: 85vw;
    .overlay {
      max-width: 85vw;
    }
  }
  @media (min-width: 1441px) {
    max-width: 71vw;
    .overlay {
      max-width: 71vw;
    }
  }
  @media (max-width: 1024px) {
    max-width: 84.5vw;
    .overlay {
      max-width: 84.5vw;
    }
  }
  @media (max-width: 768px) {
    max-width: 86vw;
    .overlay {
      max-width: 86vw;
    }
  }
`;

// Styled component for dot indicators (visible only on mobile)
const SliderDotsWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 24px 0px;
  }
`;

// Styled component for individual dots
const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0px 4px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--clr-primary)" : "var(--clr-light2)"};
`;
