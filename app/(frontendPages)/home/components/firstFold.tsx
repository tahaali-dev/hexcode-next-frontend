"use client";
import { PrimaryBtn, TertiaryBtn } from "@/app/styledComps/buttons";
import { DashedContainer } from "@/app/styledComps/containers";
import {
  HighlightText,
  SectionTitle,
  SectionTitle2,
} from "@/app/styledComps/texts";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// Array of strings to cycle through
const highlightTexts = [
  "Digital Products",
  "Creative Designs",
  "Design Solutions",
  "Brilliant Works",
];

const Firstfold = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show first transition immediately
    const immediateTransition = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightTexts.length);
    }, 0);

    // Regular interval to update the text
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightTexts.length);
    }, 2500);

    return () => {
      clearTimeout(immediateTransition); // Clear initial timeout
      clearInterval(interval); // Clear interval on unmount
    };
  }, []);

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <FirstFoldWrapper>
        <SectionTitle2 className="mb-lg">
          We’re HEXCODE – Your UX design and development Partner
        </SectionTitle2>

        <SectionTitle
          fontSize="64px"
          lineHeight="74px"
          className="main-heading "
        >
          We help people build <br /> impactful brands
        </SectionTitle>

        {/* <SectionTitle
          fontSize="64px"
          lineHeight="74px"
          className="main-heading "
        >
          World-Class{" "}
          <RollingTextWrapper>
            <div
              className="text-slide"
              style={{ transform: `translateY(-${currentIndex * 25}%)` }}
            >
              {highlightTexts.map((text, index) => (
                <HighlightText key={index}>{text}</HighlightText>
              ))}
            </div>
          </RollingTextWrapper>
          <br /> <p className="mt-8">On‑Time. On‑Budget. On‑Point.</p>
        </SectionTitle> */}

        <div className="d-flex align-center justify-center mt-xxl 2 g-lg m-mt-32">
          <PrimaryBtn
            padding="16px"
            fontSize="18px"
            margin="0"
            borderRadius="8px"
            btnContent="Book a call"
            onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
          />

          {/* <TertiaryBtn padding="16px" fontSize="18px" className="w-full m-none">
            Our projects
          </TertiaryBtn> */}
        </div>
      </FirstFoldWrapper>
    </DashedContainer>
  );
};

export default Firstfold;

// Styles ---
const FirstFoldWrapper = styled.div`
  padding: 80px 8px;

  @media (max-width: 768px) {
    padding: 52px 8px 32px 8px;

    .main-heading {
      font-size: 38px;
      line-height: 48px;
    }

    .mt-8 {
      margin-top: -8px;
    }
    .w-full {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .main-heading {
      font-size: 28px;
      line-height: 42px;
    }

    .m-mt-32 {
      margin-top: 32px !important;
    }
  }
`;

const RollingTextWrapper = styled.div`
  display: inline-block;
  position: relative;
  height: 59px;
  overflow: hidden;
  width: max-content;

  .text-slide {
    display: flex;
    flex-direction: column;
    transition: transform 1s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 46px;
  }
`;
