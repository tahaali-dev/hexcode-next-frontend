"use client";
import { PrimaryBtn } from "../styledComps/buttons";
import GradientShades from "../styledComps/GradientShades";
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from "../styledComps/containers";
import { FooterMarquee } from "../styledComps/FooterMarquee";
import GetInTouchIcon from "../public/basics/getintouchicon.svg";

const Footer = () => {
  const shades = ["#4A0507", "#881418", "#A50F14", "#C80D13", "#EE232A"];

  return (
    <>
      <DashedContainer
        leftTop={false}
        leftBottom={true}
        rightTop={false}
        rightBottom={true}
        borderTopNone="none"
      >
        <FooterContainerDesktop className="m-none">
          <div>
            <AnchorLink>
              Whenever, wherever. <br /> We're meant to work together.
            </AnchorLink>

            <ParaLight className="mt-md">
              Get in touch with us for full-time job <br /> opportunities,
              freelance projects, design <br /> advice, or simply to say hello.
            </ParaLight>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase">Explore</LightHeading>
            <AnchorLink>Projects</AnchorLink>
            <AnchorLink>About</AnchorLink>
            <AnchorLink>Services</AnchorLink>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase">say hello!</LightHeading>
            <AnchorLink>instagram</AnchorLink>
            <AnchorLink>Twitter (X)</AnchorLink>
            <AnchorLink>Dribble</AnchorLink>
          </div>

          <div className="d-flex flex-column g-md">
            <LightHeading className="text-Uppercase">Got an idea?</LightHeading>

            <div className="d-flex align-center g-md">
              <AnchorLink>Get in touch</AnchorLink>
              <StyledImage
                src={GetInTouchIcon}
                width="32"
                height="32"
                alt="get in touch icon"
              />
            </div>
          </div>
        </FooterContainerDesktop>

        <FooterContainerMobile className="d-none">
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">
              What we're good at
            </LightHeading>
            <AnchorLink>Projects</AnchorLink>
          </div>
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">What we do</LightHeading>
            <AnchorLink>Capabilities</AnchorLink>
          </div>
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">
              How we deliver
            </LightHeading>
            <AnchorLink>our process</AnchorLink>
          </div>
          <div className="w-100 d-flex justify-between align-center">
            <LightHeading className="text-Uppercase">Who we are</LightHeading>
            <AnchorLink>About</AnchorLink>
          </div>

          <div className="w-100 d-flex justify-between mt-xxl ">
            <LightHeading className="text-Uppercase">Say hello</LightHeading>

            <div className="d-flex flex-column g-md align-end">
              <AnchorLink>Linkedin</AnchorLink>
              <AnchorLink>Instagram</AnchorLink>
              <AnchorLink>Twitter (X)</AnchorLink>
            </div>
          </div>

          <div className="mt-xxl">
            <LightHeading className="text-Uppercase">got an idea?</LightHeading>
            <PrimaryBtn padding="16px" fontSize="18px" className="w-full mt-sm">
              get in touch
            </PrimaryBtn>
          </div>

          <LightHeading className="text-Uppercase mt-sm text-center">
            BAck to top ⇡
          </LightHeading>
        </FooterContainerMobile>

        <div className="px-xs">
          <GradientShades
            shades={shades}
            margin="0px"
            borderRadius="0px"
            numberOfRows="5"
          />
        </div>

        <div className="px-xs pb-xs">
          <FooterMarquee />
        </div>
      </DashedContainer>

      <DashedContainer
        leftTop={false}
        leftBottom={false}
        rightTop={false}
        rightBottom={false}
        borderTopNone="none"
      >
        <CopyWriteWrapper className="d-flex align-center justify-between px-lg py-sm">
          <LightCopyText>© 2024 Hexcode. All Rights Reserved.</LightCopyText>

          <div className="d-flex align-center g-lg ">
            <LightCopyText>Terms</LightCopyText>
            <LightCopyText>Privacy</LightCopyText>
          </div>
        </CopyWriteWrapper>
      </DashedContainer>
    </>
  );
};

export default Footer;

// Styles -----------------------------------------------------------
const FooterContainerDesktop = styled.div`
  background-color: var(--clr-dark);
  padding: 40px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
  margin: 4px 4px 0px 4px;
`;

const FooterContainerMobile = styled.div`
  background-color: var(--clr-dark);
  padding: 24px 18px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 4px 4px 0px 4px;

  .w-full {
    width: 100%;
  }
`;

const LightHeading = styled.h2`
  color: var(--clr-primary-l2);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    text-transform: ;
  }
`;

const AnchorLink = styled.a`
  color: var(--white-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40 px;
  }
`;

const ParaLight = styled.p`
  color: var(--clr-light3);
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`;

const CopyWriteWrapper = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LightCopyText = styled.p`
  color: var(--clr-dark3);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
