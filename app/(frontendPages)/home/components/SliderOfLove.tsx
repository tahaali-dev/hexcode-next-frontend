"use client";
import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import clientLove from "../../../public/basics/clientLove.svg";
import clientPhoto from "../../../public/basics/clientphoto.svg";
import { DashedContainer } from "@/app/styledComps/containers";
import { HexSectionName, SectionTitle } from "@/app/styledComps/texts";
import { SliderLoveCard } from "@/app/styledComps/cards";

const SliderOfLove = () => {
  const sliderRef: any = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current card index
  const [numOfCards, setNumOfCards] = useState(0); // To store the number of cards

  // Get the number of cards in the slider
  useEffect(() => {
    setNumOfCards(sliderRef.current ? sliderRef.current.children.length : 0);
  }, []);

  // Handle mouse down
  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
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
        <SliderLoveWrapper
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
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
          />
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
          />
          <SliderLoveCard
            banner={clientLove}
            clientName="Lalit Bihani"
            clientPhoto={clientPhoto}
            clientPosition="Co-founder of Volt"
          />
          {/* Add more cards as needed */}
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

// Styles ---
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
  cursor: grab;
  scroll-behavior: smooth;
  user-select: none;

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

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
    cursor: grabbing; /* Change cursor when dragging */
  }

  @media (max-width: 768px) {
    max-width: 92vw;
  }
`;

// Dot styles
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
