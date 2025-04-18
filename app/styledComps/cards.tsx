"use client";
import styled from "@emotion/styled";
import { StyledImage } from "./containers";
import { PrimaryBtn } from "./buttons";
import PlusIcon from "../public/homepage/plusIcon.svg";
import MinusIcon from "../public/homepage/minusIcon.svg";
import { useState } from "react";
// Imports for all --------------------------------

// What do we do card ------------------------------
export const WhatWeDoCard = ({
  title,
  bgcolor,
  para1,
  para2,
  image,
  mobileImage,
  icon,
}: {
  title: string;
  bgcolor: string;
  para1: string;
  para2: string;
  image: string;
  mobileImage: any;
  icon: string;
}) => {
  return (
    <WWDWrapper bgcolor={bgcolor}>
      <div className="left">
        <div className="d-flex g-md ">
          <StyledImage
            src={icon}
            width={64}
            height={64}
            alt={`image`}
            className="m-none"
          />
          <h4 className="card-heading">{title}</h4>
        </div>

        <div className="content-box">
          <p className="text-1">
            {para1.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="text-2">
            {para2.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* Mobile image */}
          <StyledImage
            src={mobileImage}
            alt={`image`}
            className="mobile-illustration d-none"
          />
        </div>
      </div>

      <div className="right m-none">
        <div className="half-color"></div>
        <StyledImage src={image} alt={`image`} className="illustration" />
      </div>
    </WWDWrapper>
  );
};

// Styles ----------------------------------------------------------------
const WWDWrapper = styled.div<{ bgcolor: string }>`
  display: flex;
  justify-content: space-between;

  .left {
    width: 65%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 128px;
    justify-content: space-between;
    border-radius: 16px 0 0 16px;
    background-color: ${({ bgcolor }) => bgcolor || "#fff"};

    .card-heading {
      color: var(--clr-dark);
      font-size: 54px;
      font-weight: 500;
      line-height: 64px;
      text-transform: uppercase;
    }

    .content-box {
      display: flex;
      gap: 80px;

      .text-1 {
        color: var(--clr-dark2);
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
      }

      .text-2 {
        color: var(--clr-dark);
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }

  .right {
    position: relative;
    min-width: 515px;

    .half-color {
      background-color: ${({ bgcolor }) => bgcolor || "#fff"};
      width: 50%;
      margin-left: -2px;
    }

    .illustration {
      position: absolute;
      object-fit: contain;
    }
  }

    @media (max-width: 1650px) {
    .left .card-heading {
      font-size: 32px;
      line-height: 42px;
    }
.left .content-box {
gap: 0px;
}

  }


  @media (max-width: 768px) {
    flex-direction: column;

    .left {
      width: 100%;
      padding: 16px;
      gap: 16px;
      border-radius: 16px;

      .card-heading {
        font-size: 32px;
        line-height: 42px;
      }

      .content-box {
        flex-direction: column;
        gap: 24px;

        .text-1,
        .text-2 {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    .right {
      min-width: 100%;
    }
  }
`;


// Consulting card ----------------------------------
export const ConsultingCard = ({
  title,
  bgcolor,
  para1,
  image,
  mobileImage,
  icon,
}: {
  title: string;
  bgcolor: string;
  para1: string;
  image: string;
  mobileImage: any;
  icon: string;
}) => {
  return (
    <ConsultingCardWrapper bgcolor={bgcolor}>
      <div className="left">
        <div className="d-flex g-md ">
          <StyledImage
            src={icon}
            width={64}
            height={64}
            alt={`image`}
            className="m-none"
          />
          <h4 className="card-heading">{title}</h4>
        </div>

        {/* Mobile image */}
        <StyledImage
          src={mobileImage}
          alt={`image`}
          className="mobile-illustration d-none"
        />

        <div className="content-box">
          <p className="text-1">
            {para1.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="mt-lg w-full">
            <PrimaryBtn
              padding="16px"
              fontSize="18px"
              margin="0"
              borderRadius="8px"
              btnContent="Book a call"
              onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
            />
          </div>
        </div>
      </div>

      <div className="right m-none">
        <div className="half-color"></div>
        <StyledImage src={image} alt={`image`} className="illustration" />
      </div>
    </ConsultingCardWrapper>
  );
};

const ConsultingCardWrapper = styled.div<{ bgcolor: string }>`
  display: flex;
  justify-content: space-between;

  .left {
    width: 65%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 128px;
    justify-content: space-between;
    border-radius: 16px 0px 0px 16px;
    background-color: ${(prop) => (prop.bgcolor ? prop.bgcolor : "#fff")};

    .card-heading {
      color: var(--white-color);
      font-size: 54px;
      font-weight: 500;
      line-height: 64px;
      text-transform: uppercase;
    }

    .content-box {
      .text-1 {
        color: var(--white-color);
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
      }
    }
  }

  .right {
    position: relative;
    min-width: 515px;

    .half-color {
      background-color: ${(prop) => (prop.bgcolor ? prop.bgcolor : "#fff")};
      width: 50%;
      margin-left: -2px;
    }

    .illustration {
      position: absolute;
      object-fit: contain;
    }
  }

    @media (min-width: 1650px) {
      .card-heading {
        font-size: 32px;
        line-height: 42px;
      }
    }

  @media (max-width: 768px) {
    .left {
      padding: 16px;
      width: 100%;
      border-radius: 16px;
      gap: 24px;

      .card-heading {
        font-size: 32px;
        line-height: 42px;
      }

      .content-box {
        display: flex;
        flex-direction: column;
        gap: 0px;
        .text-1 {
          font-size: 16px;
          line-height: 24px;
        }
        .text-2 {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }

    .w-full {
      width: 100%;
    }
  }
`;

// Project card ----------------------------------------------------------------
const ProjectCard = ({
  projectName,
  projectDetails,
  banner,
  url
}: {
  projectName: string;
  projectDetails: string;
  banner: string;
  url?: string;
}) => {
  return (
    <ProjectCardWrapper href={url} target="_blank">
      <StyledImage
        src={banner}
        alt={`project-banner`}
        className="project-banner"
      />

      <p className="project-details mt-md">
        <span className="project-name"> {projectName}</span> - {projectDetails}
      </p>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;

// Styles ---
const ProjectCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  padding: 12px;
  border-radius: 16px;
  text-decoration: none;

  .project-banner {
    border-radius: 16px;
    overflow: hidden; /* Important for clipping the image when it scales */
  }

  .project-banner{
    transition: transform 0.4s ease;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 16px;
    overflow: hidden;
  }

  &:hover .project-banner{
    transform: scale(1.02);
  }

  .project-details {
    color: var(--clr-dark2);
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    text-align: left;
  }

  .project-name {
    color: var(--clr-dark2);
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;

    .project-details {
      font-size: 18px;
      line-height: 28px;
    }

    .project-name {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;


//  slider card
export const SliderLoveCard = ({
  banner,
  clientName,
  clientPhoto,
  clientPosition,
}: {
  banner: string;
  clientName: string;
  clientPhoto: string;
  clientPosition: string;
}) => {
  return (
    <SliderLoveCardWrapper>
      <StyledImage src={banner} alt={`card banner`} className="card-banner" />
      <div className="d-flex align-center g-sm mt-xxl">
        <StyledImage
          src={clientPhoto}
          width="28"
          height="28"
          alt={`card banner`}
        />
        <p className="client-details">
          <span className="client-name">{clientName}</span>
          {clientPosition}
        </p>
      </div>
    </SliderLoveCardWrapper>
  );
};

// styles  ---
const SliderLoveCardWrapper = styled.div`
  background: var(--white-color);
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  .client-name {
    color: var(--clr-dark);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-right: 4px;
  }

  .client-details {
    color: var(--grey-b1);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

// Benefit card --------------------------------
export const Benefitcard = ({ icon, title, subtitle }: any) => {
  return (
    <BenefitCardWrapper>
      <StyledImage
        src={icon}
        width="64"
        height="64"
        alt={`card icon`}
        className="mb-md"
      />
      <h4>{title}</h4>
      <p>
        {subtitle.split("\n").map((line: any, index: number) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </BenefitCardWrapper>
  );
};

// styles  ---
const BenefitCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: var(--tertiary-color);
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
  }

  p {
    color: #343f46;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    h4 {
      font-size: 18px;
      line-height: 20px;
      text-align: left;
    }

    p {
      text-align: left;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

// Accordion card
export const AccordionCard = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <Header onClick={toggleAccordion}>
        <p>{title}</p>
        <StyledImage
          src={isOpen ? MinusIcon : PlusIcon}
          width="32"
          height="32"
          alt={`accordion icon`}
        />
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </AccordionContainer>
  );
};

// Styled components
const AccordionContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--white-color);
  height: fit-content;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Header = styled.div`
  background-color: var(--white-color);
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--clr-dark);
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
`;

const Content = styled.div<{
  isOpen: boolean;
}>`
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
