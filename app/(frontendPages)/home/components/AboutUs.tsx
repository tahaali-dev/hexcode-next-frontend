"use client";
import styled from "@emotion/styled";
import aboutUsHexagons from "../../../public/homepage/aboutushexagones.png";
import { DashedContainer, StyledImage } from "@/app/styledComps/containers";
import {
  HexSectionName,
  SectionSubHeading,
  SectionTitle,
} from "@/app/styledComps/texts";
import { PrimaryBtn } from "@/app/styledComps/buttons";
import Benefits from "./Benefits";
// Imports ------------------------------------------------

const AboutUs = () => {
  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <div className="p-xs ">
        <AboutUsWrapper>
          <div className="mx-lg">
            <div className="mt-64">
              <HexSectionName title="About Hexcode" />
            </div>
            <SectionTitle
              fontSize="54px"
              lineHeight="64px"
              className="mt-lg text-white"
            >
              Building Experiences That Matter
            </SectionTitle>
            <SectionSubHeading className="mt-md text-white">
              We are a product strategy and design agency dedicated to creating{" "}
              <br />
              digital experiences customers love.
            </SectionSubHeading>

            <div className="mt-lg">
              <PrimaryBtn
                padding="16px"
                fontSize="18px"
                margin="0"
                borderRadius="8px"
                btnContent="About us"
              />
            </div>
          </div>
          <StyledImage
            src={aboutUsHexagons}
            alt="about-us-image"
            className="hexagons-image"
          />
        </AboutUsWrapper>
      </div>
    </DashedContainer>
  );
};

export default AboutUs;

// styles --
const AboutUsWrapper = styled.div`
  border-radius: 16px;
  background: var(--clr-dark);
  text-align: center;
  overflow: hidden;

  .mt-64 {
    margin-top: 64px;
  }

  .hexagons-image {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    .mt-64 {
      margin-top: 24px;
    }

    .w-full {
      width: 100%;
      margin-bottom: 32px;
    }
  }
`;
