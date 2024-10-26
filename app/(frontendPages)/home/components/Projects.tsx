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
          <HexSectionName title="Projects" />
          <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
            Selected work
          </SectionTitle>
          <SectionSubHeading className="mt-md">
            Whether it's a vibrant website or a minimal mobile app you seek.{" "}
            <br /> We deliver exceptional quality for all.
          </SectionSubHeading>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            className="projects-holder"
          >
            <Masonry columnsCount={2} className="gap-64">
              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR1}
              />
              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR4}
              />

              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR3}
              />
              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR5}
              />
              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR2}
              />

              <ProjectCard
                projectName="Taper App"
                projectDetails="Redesigning new app for discovering barber and beauty professionals."
                banner={PR6}
              />
            </Masonry>
          </ResponsiveMasonry>

          <PrimaryBtn
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
          </LightText>
        </ProjectsWrapper>
      </div>
    </DashedContainer>
  );
};

export default Projects;

// styles --
const ProjectsWrapper = styled.div`
  border-radius: 16px;
  background: var(--white-color);
  padding: 80px 22px;
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
