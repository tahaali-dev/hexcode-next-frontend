// @ts-nocheck
"use client";
import Marquee from "react-marquee-slider";
import one from "../../../public/companies/sensrtech.svg";
import two from "../../../public/companies/Evenly.svg";
import three from "../../../public/companies/affinity.svg";
import four from "../../../public/companies/Builder.svg";
import five from "../../../public/companies/MPL.svg";
import six from "../../../public/companies/Micromax.svg";
import seven from "../../../public/companies/Cuemath.svg";
import eight from "../../../public/companies/rupeek.svg";
import nine from "../../../public/companies/UE.svg";
import ten from "../../../public/companies/microsoft.svg";
import eleven from "../../../public/companies/Degreelabs.svg";
import twelve from "../../../public/companies/Volt.svg";
import thirteen from "../../../public/companies/uaechange.svg";
import fourteen from "../../../public/companies/yocharge.svg";
import fifteen from "../../../public/companies/tinker-village.svg";
import sixteen from "../../../public/companies/Install iot.svg";
import seventeen from "../../../public/companies/Clap.svg";
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from "@/app/styledComps/containers";
import { SectionTitle2 } from "@/app/styledComps/texts";

// Imports ---

const CompaniesMarquee = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <CompaniesWrapper>
        <SectionTitle2>
          Over the years, Collaborated with amazing brands
        </SectionTitle2>

        <div className="marquee-holder">
          <div className="gradient-left"></div>

          <Marquee velocity={isMobile ? 8 : 25} direction={"rtl"}>
            <div className="logo-holder">
              <StyledImage
                src={one}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={two}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={three}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={four}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={five}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={six}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={seven}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={eight}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={nine}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={ten}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={eleven}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>{" "}
            <div className="logo-holder">
              <StyledImage
                src={twelve}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={thirteen}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={fourteen}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={fifteen}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={sixteen}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
            <div className="logo-holder">
              <StyledImage
                src={seventeen}
                width="100"
                height="100"
                alt={`icon-one`}
              />
            </div>
          </Marquee>
          <div className="gradient-right"></div>
        </div>
      </CompaniesWrapper>
    </DashedContainer>
  );
};

export default CompaniesMarquee;

// styles --
const CompaniesWrapper = styled.div`
  padding: 42px 0px;
  max-width: 92vw;

  .marquee-holder {
    position: relative;
    margin-top: 24px;
  }

  .logo-holder {
    margin: 0px 50px;
  }

  .gradient-left {
    position: absolute;
    min-width: 83px;
    height: 100%;
    left: 0px;
    z-index: 1;
    background: linear-gradient(
      90deg,
      #fbf9f9 8.47%,
      rgba(251, 249, 249, 0) 100%
    );
  }

  .gradient-right {
    position: absolute;
    min-width: 83px;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 1;
    background: linear-gradient(
      270deg,
      #fbf9f9 8.47%,
      rgba(251, 249, 249, 0) 100%
    );
  }

  @media (max-width: 768px) {
    padding: 32px 8px;

    .logo-holder {
      margin: 0px 20px;
    }
  }
`;
