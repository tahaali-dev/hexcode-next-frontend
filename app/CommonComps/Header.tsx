"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../public/basics/Logo.svg";
import ProjectIcon from "../public/basics/projects.svg";
import AboutIcon from "../public/basics/about.svg";
import ServicesIcon from "../public/basics/services.svg";
import ContactIcon from "../public/basics/contactus.svg";
import FigmaIcon from "../public/basics/figma.svg";
import HamburgerIcon from "../public/homepage/hamburgerIcon.svg";
import { DashedContainer, StyledImage } from "../styledComps/containers";
import { NavLink } from "../styledComps/Links";
import { PrimaryBtn, SecondaryBtn } from "../styledComps/buttons";
// Imports --------------------------------------------------------------

const Header = () => {
  return (
    <HeaderSticky>
      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        <HeaderWrapper>
          <div className="p-md d-flex align-center justify-between ">
            <div className="d-flex g-xl">
              <Image src={Logo} height={20} alt="hexcode-logo" />
              <div className="d-flex g-xl m-none">
                <NavLink icon={ProjectIcon} title={"Projects"} />
                <NavLink icon={AboutIcon} title={"About"} />
                <NavLink icon={ServicesIcon} title={"Services"} />
                <NavLink icon={ContactIcon} title={"Contact us"} />
              </div>
            </div>

            <div className="hamburger-holder d-none">
              <StyledImage
                src={HamburgerIcon}
                alt="figma-icon"
                width="20"
                height="20"
              />
            </div>

            <div className="d-flex g-md m-none">
              <SecondaryBtn>
                <StyledImage
                  src={FigmaIcon}
                  alt="figma-icon"
                  width="20"
                  height="20"
                />
              </SecondaryBtn>
              <PrimaryBtn
                padding="8px 16px"
                fontSize="16px"
                margin="0"
                borderRadius="8px"
                btnContent="Lets's Talk"
              />
            </div>
          </div>
        </HeaderWrapper>
      </DashedContainer>
    </HeaderSticky>
  );
};

export default Header;

// styles --

const HeaderSticky = styled.section`
  position: sticky;
  top: 0;
  z-index: 5;
`;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--background-color);

  .hamburger-holder {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--Black-black-200, #eae1e1);
    background: var(--Black-black-50, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
