"use client";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Logo from "../public/basics/Logo.svg";
import ProjectIcon from "../public/homepage/navIconActive1.svg";
import AboutIcon from "../public/homepage/navIconActive2.svg";
import ServicesIcon from "../public/homepage/navIconActive3.svg";
import ContactIcon from "../public/homepage/navIconActive4.svg";
import FigmaIcon from "../public/basics/figma.svg";
import HamburgerIcon from "../public/homepage/hamburgerIcon.svg";
import { DashedContainer, StyledImage } from "../styledComps/containers";
import { NavLink } from "../styledComps/Links";
import { PrimaryBtn, SecondaryBtn } from "../styledComps/buttons";
import gsap from "gsap";
// Imports --------------------------------------------------------------

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const header = document.querySelector("#header");

    if (scrollDirection === "down") {
      gsap.to(header, { y: -100, duration: 0.5, ease: "power2.out" }); // Hide animation
    } else {
      gsap.to(header, { y: 0, duration: 0.5, ease: "power2.out" }); // Show animation
    }
  }, [scrollDirection]);

  return (
    <HeaderSticky id="header">
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
              {/* <div className="d-flex g-xl m-none">
                <NavLink icon={ProjectIcon} title={"Projects"} />
                <NavLink icon={AboutIcon} title={"About"} />
                <NavLink icon={ServicesIcon} title={"Services"} />
                <NavLink icon={ContactIcon} title={"Contact us"} />
              </div> */}
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
              {/* <SecondaryBtn>
                <StyledImage
                  src={FigmaIcon}
                  alt="figma-icon"
                  width="20"
                  height="20"
                />
              </SecondaryBtn> */}
              <PrimaryBtn
                padding="12px 16px"
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
  will-change: transform;
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
  .nav-icon {
    img {
      filter: grayscale(100%);
    }
  }
`;
