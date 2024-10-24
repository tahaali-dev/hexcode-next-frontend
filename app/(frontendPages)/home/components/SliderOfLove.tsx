"use client";
import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import clientLove from "../../../public/basics/clientLove.svg";
import clientPhoto from "../../../public/basics/clientphoto.svg";
import { DashedContainer } from "@/app/styledComps/containers";
import { HexSectionName, SectionTitle } from "@/app/styledComps/texts";
import { SliderLoveCard } from "@/app/styledComps/cards";
import gsap from "gsap";

const SliderOfLove = () => {
  const sliderRef: any = useRef(null);
  const cursorRef = useRef<HTMLDivElement | null>(null); // Ref for the custom cursor
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current card index
  const [numOfCards, setNumOfCards] = useState(0); // To store the number of cards
  const [showCursor, setShowCursor] = useState(false); // To control visibility of the custom cursor

  // Get the number of cards in the slider
  useEffect(() => {
    setNumOfCards(sliderRef.current ? sliderRef.current.children.length : 0);

    // GSAP Custom Cursor animation
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.3,
          x: e.clientX - cursorRef.current.offsetWidth / 2,
          y: e.clientY - cursorRef.current.offsetHeight / 2,
          ease: "power3.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle mouse down
  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    gsap.to(cursorRef.current, { scale: 1.5 }); // Scale cursor on grab
  };

  // Handle mouse move
  const handleMouseMove = (e: any) => {
    if (!isDragging) return; // Only scroll if dragging
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed factor
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up / leave
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    gsap.to(cursorRef.current, { scale: 1 }); // Return cursor to normal size

    const sliderWidth = sliderRef.current.offsetWidth;
    const scrollPos = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / sliderWidth); // Calculate the visible card index
    setCurrentIndex(newIndex); // Update the current card index
  };

  // Update active dot on scroll
  const handleScroll = () => {
    const sliderWidth = sliderRef.current.offsetWidth;
    const scrollPos = sliderRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / sliderWidth); // Calculate the visible card index
    setCurrentIndex(newIndex); // Update the current card index
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
        {showCursor && <CustomCursor ref={cursorRef}>Scroll</CustomCursor>}

        <SliderLoveWrapper
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            setShowCursor(false); // Hide cursor when leaving the slider
          }}
          onMouseEnter={() => setShowCursor(true)} // Show cursor when entering the slider
          onScroll={handleScroll}
        >
          {/* Cards */}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />{" "}
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />
        </SliderLoveWrapper>
      </DashedContainer>

      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        {/* Dots for navigation (only visible on mobile) */}
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

// Custom Cursor Styles ---
const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background-color: var(--clr-primary);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
`;

// Other Styles ---
const SliderHeadingWrapper = styled.div`
  padding: 62px 0px;

  @media (max-width: 768px) {
    padding: 32px 0px;
  }
`;

const SliderLoveWrapper = styled.div`
  padding: 4px;
  display: flex;
  gap: 26px;
  overflow-x: auto;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  user-select: none;
  cursor: none;

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    flex: 0 0 calc((100% - 52px) / 3); /* Show 3 cards at a time */

    @media (max-width: 1024px) {
      flex: 0 0 calc((100% - 52px) / 2); /* Show 2 cards on tablet */
    }

    @media (max-width: 768px) {
      flex: 0 0 100%; /* Show 1 card on mobile */
    }
  }

  &.active {
    cursor: grabbing;
  }

  @media (max-width: 1440px) {
    max-width: 86vw;
  }
  @media (min-width: 1441px) {
    max-width: 74vw;
  }

  @media (max-width: 768px) {
    max-width: 92vw;
  }
`;

const SliderDotsWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 24px 0px;
  }
`;

const Dot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? "var(--clr-primary)" : "var(--clr-light2)"};
  margin: 0 4px;
  transition: background-color 0.3s ease;
`;
