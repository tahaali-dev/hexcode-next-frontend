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
  icon,
}: {
  title: string;
  bgcolor: string;
  para1: string;
  para2: string;
  image: string;
  icon: string;
}) => {
  return (
    <WhatWeDoCardWrapper bgcolor={bgcolor}>
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

        <div className="para-box">
          <p className="para-1">
            {para1.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className="para-2">
            {para2.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="right m-none">
        <StyledImage src={image} alt={`image`} />
      </div>
    </WhatWeDoCardWrapper>
  );
};

// Styles ----------------------------------------------------------------
const WhatWeDoCardWrapper = styled.div<{ bgcolor: string }>`
  min-width: 100%;
  background-color: ${(prop) => (prop.bgcolor ? prop.bgcolor : "#fff")};
  border-radius: 16px 0px 0px 16px;
  clip-path: polygon(0 0, 89% 0, 100% 50%, 89% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: space-between;

  .left {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .card-heading {
      color: var(--clr-dark);
      font-size: 54px;
      font-weight: 400;
      line-height: 64px;
      text-transform: uppercase;
    }

    .para-box {
      display: flex;
      gap: 80px;
      .para-1 {
        color: var(--clr-dark2);
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
      }
      .para-2 {
        color: var(--clr-dark);
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }

  .right {
    aspect-ratio: 1 / cos(30deg);
    clip-path: polygon(50% -50%, 100% 50%, 50% 150%, 0 50%);
  }

  /* Media queries for various resolutions */
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 0);
    border-radius: 16px;

    .left {
      padding: 16px;
      .card-heading {
        font-size: 32px !important;
        font-weight: 400;
        line-height: 42px;
        margin-bottom: 16px !important;
      }

      .para-box {
        flex-direction: column;
        gap: 24px !important;
        .para-1 {
          font-size: 16px !important;
          line-height: 24px;
        }
      }
    }
  }
`;

// Consulting card ----------------------------------
export const ConsultingCard = ({
  title,
  bgcolor,
  para1,
  image,
  icon,
}: {
  title: string;
  bgcolor: string;
  para1: string;
  image: string;
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

        <p className="para-1">
          {para1.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        <PrimaryBtn padding="16px" fontSize="18px" className="mt-lg w-full">
          Book a call
        </PrimaryBtn>
      </div>

      <div className="right m-none">
        <StyledImage src={image} alt={`image`} />
      </div>
    </ConsultingCardWrapper>
  );
};

const ConsultingCardWrapper = styled.div<{ bgcolor: string }>`
  min-width: 100%;
  background-color: ${(prop) => (prop.bgcolor ? prop.bgcolor : "#fff")};
  border-radius: 16px 0px 0px 16px;
  clip-path: polygon(0 0, 89% 0, 100% 50%, 89% 100%, 0 100%, 0 0);
  display: flex;
  justify-content: space-between;

  .left {
    padding: 32px;

    .card-heading {
      color: var(--white-color);
      font-size: 54px;
      font-weight: 400;
      line-height: 64px;
      text-transform: uppercase;
    }

    .para-1 {
      color: var(--white-color);
      font-size: 18px;
      font-weight: 300;
      line-height: 24px;
    }
  }

  /* Media queries for various resolutions */
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 0);
    border-radius: 16px;

    .left {
      padding: 16px;

      .w-full {
        width: 100%;
        margin-top: 32px;
      }

      .card-heading {
        font-size: 32px !important;
        font-weight: 400;
        line-height: 42px;
        margin-bottom: 16px !important;
      }

      .para-1 {
        font-size: 16px !important;
        line-height: 24px;
        margin-top: 68px;
      }
    }
  }
`;

// Project card ----------------------------------------------------------------
const ProjectCard = ({
  projectName,
  projectDetails,
  banner,
}: {
  projectName: string;
  projectDetails: string;
  banner: string;
}) => {
  return (
    <ProjectCardWrapper>
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
const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  .project-banner {
    border-radius: 16px;
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
    color: var(--tertiary-color);
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
