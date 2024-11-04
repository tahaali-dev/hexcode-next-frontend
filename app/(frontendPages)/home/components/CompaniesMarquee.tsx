// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import Marquee from "react-marquee-slider";
import one from "../../../public/companies/uae.svg";
import two from "../../../public/companies/MPL.svg";
import three from "../../../public/companies/cuemathLogo.svg";
// import four from "../../../public/companies/Rupeek.svg";
import five from "../../../public/companies/Micromax.svg";
// import six from "../../../public/companies/builder.svg";
import seven from "../../../public/companies/ayla.svg";
import eight from "../../../public/companies/affinity.svg";
import nine from "../../../public/companies/Volt.svg";
import ten from "../../../public/companies/squadcast.svg";
import eleven from "../../../public/companies/userexperior.svg";
import twelve from "../../../public/companies/Cyanergy.svg";
import thirteen from "../../../public/companies/tinker.svg";
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from "@/app/styledComps/containers";
import { SectionTitle2 } from "@/app/styledComps/texts";

const CompaniesMarquee = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered] = useState(false);

  // UseEffect to ensure the `window` object is accessed only on the client
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value for `isMobile`
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
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
      <CompaniesWrapper
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SectionTitle2 className="m">
          Over the years, Collaborated with amazing brands
        </SectionTitle2>

        <div className="marquee-holder">
          <div className="gradient-left"></div>

          <Marquee velocity={hovered ? 0 : isMobile ? 8 : 25} direction={"rtl"}>
            {[
              one,
              two,
              three,
              // four,
              nine,
              five,
              // six,
              eleven,
              seven,
              eight,
              ten,
              twelve,
              thirteen,
            ].map((imageSrc, index) => (
              <div className="logo-holder" key={index}>
                <StyledImage
                  src={imageSrc}
                  alt={`icon-${index + 1}`}
                  className="company-logo"
                />
              </div>
            ))}
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
    margin-left: 50px;
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

  .company-logo {
    filter: grayscale(100%);
    transition: 0.3s ease;
  }

  :hover .company-logo {
    filter: none;
    transition: 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 32px 8px;

    .logo-holder {
      margin: 0px 20px;
    }
  }
`;
