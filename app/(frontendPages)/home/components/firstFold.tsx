"use client";
import { PrimaryBtn, TertiaryBtn } from "@/app/styledComps/buttons";
import { DashedContainer } from "@/app/styledComps/containers";
import {
  HighlightText,
  SectionTitle,
  SectionTitle2,
} from "@/app/styledComps/texts";
import styled from "@emotion/styled";
import useHighlightText from "../hooks/useHighlightText";
// Imports ------------------------------------------------

// Array of strings to cycle through
const highlightTexts = [
  "Digital Products",
  "Creative Designs",
  "Design Solutions",
  "Brilliant Works",
];

const Firstfold = () => {
  // Text Animation hook --------------------------------
  const { highlightRef, currentText } = useHighlightText(highlightTexts);

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
          It's Hexcode, Your product design partner!
        </SectionTitle2>

        <SectionTitle fontSize="64px" lineHeight="74px">
          World-Class{" "}
          <HighlightText ref={highlightRef}>{currentText}</HighlightText>
          <br /> On‑Time. On‑Budget. On‑Point.
        </SectionTitle>

        <div className="d-flex align-center justify-center mt-xxl 2 g-lg btns-box">
          <PrimaryBtn
            padding="16px"
            fontSize="18px"
            margin="0"
            borderRadius="8px"
            btnContent="Book a call"
          />

          <TertiaryBtn padding="16px" fontSize="18px" className="w-full">
            Our projects
          </TertiaryBtn>
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
    padding: 32px 8px;

    .btns-box {
      flex-direction: column;

      .w-full {
        width: 100%;
      }
    }
  }
`;
