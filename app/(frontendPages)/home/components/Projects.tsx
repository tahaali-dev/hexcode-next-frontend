"use client";
import styled from "@emotion/styled";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PR1 from "../../../public/basics/pr1.svg";
import PR2 from "../../../public/basics/pr2.svg";
import PR3 from "../../../public/basics/pr3.svg";
import PR4 from "../../../public/basics/pr4.svg";
import PR5 from "../../../public/basics/pr5.svg";
import PR6 from "../../../public/basics/pr6.svg";
import { DashedContainer } from "@/app/styledComps/containers";
import { PrimaryBtn } from "@/app/styledComps/buttons";
import {
  HexSectionName,
  LightText,
  SectionSubHeading,
  SectionTitle,
} from "@/app/styledComps/texts";
import ProjectCard from "@/app/styledComps/cards";
import { useEffect, useState } from "react";

const Projects = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent rendering until mounted
  }

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <div className="p-xs">
        <ProjectsWrapper>
          <HexSectionName title="Our Portfolio" />
          <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
            Featured Projects
          </SectionTitle>
          <SectionSubHeading className="mt-md">
            Work We're Proud to Showcase
            {/* Whether it's a vibrant website or a minimal mobile app you seek.{" "}
            <br /> We deliver exceptional quality for all. */}
          </SectionSubHeading>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            className="projects-holder"
          >
            <Masonry columnsCount={2} className="gap-64">
              <ProjectCard
                projectName="Volt"
                projectDetails="Building the most trusted platform for instant loans against mutual funds and stocks."
                banner={PR1}
                url="https://voltmoney.in/"
              />
              <ProjectCard
                projectName="ABC Studios"
                projectDetails="Designing a studio website showcasing talent and stories through artist management and premium productions."
                banner={PR2}
                url="https://abcstudios.world/"
              />

              <ProjectCard
                projectName="Delve"
                projectDetails="Creating a modern website for a Y Combinator–backed AI tool simplifying compliance for fast-growing teams."
                banner={PR3}
                url="https://delve.co/"
              />

              <ProjectCard
                projectName="Install IoT"
                projectDetails="Designing a website that connects businesses with expert IoT professionals for installation, support, and scalable growth."
                banner={PR4}
                url="https://www.install-iot.com/"
              />
              <ProjectCard
                projectName="Starbrite Dental"
                projectDetails="Branding a leading dental clinic with over 19 years of trusted, high-quality care."
                banner={PR5}
              />

              <ProjectCard
                projectName="Sensyrtech"
                projectDetails="Designing customizable IoT solutions for real-time monitoring and insights."
                banner={PR6}
                url="https://www.sensyrtech.com/"
              />
            </Masonry>
          </ResponsiveMasonry>

          {/* <PrimaryBtn
            padding="16px"
            fontSize="18px"
            margin="0"
            borderRadius="8px"
            btnContent="See more projects"
          />

          <LightText className="mt-md ">
            As you know, most of my work we can’t disclose publicly,
            <br />
            you know what I mean (under NDA)
          </LightText> */}
        </ProjectsWrapper>
      </div>
    </DashedContainer>
  );
};

export default Projects;

// styles --
const ProjectsWrapper = styled.div`
  border-radius: 16px;
  padding: 80px 22px 0px 22px;
  text-align: center;

  .projects-holder {
    margin-top: 68px;
  }

  .gap-64 {
    gap: 64px !important;
  }

  @media (max-width: 768px) {
    padding: 32px 8px;

    .projects-holder {
      margin-top: 32px;
    }

    .no-wrap {
      white-space: nowrap;
    }

    .gap-64 {
      gap: 24px !important;
    }

    .w-full {
      width: 100%;
    }
  }
`;
