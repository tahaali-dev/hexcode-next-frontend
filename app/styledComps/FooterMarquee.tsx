//@ts-nocheck
import Marquee from "react-marquee-slider";
import FooterLogo from "../public/homepage/footerlogo.svg";
import styled from "@emotion/styled";
import { StyledImage } from "./containers";

export const FooterMarquee = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <FooterMarqueeWrapper>
        <Marquee velocity={isMobile ? 8 : 25} direction={"rtl"}>
          <div className="logo-holder">
            <StyledImage src={FooterLogo} alt="logo" />
          </div>
          <div className="logo-holder">
            <StyledImage src={FooterLogo} alt="logo" />
          </div>{" "}
          <div className="logo-holder">
            <StyledImage src={FooterLogo} alt="logo" />
          </div>{" "}
          <div className="logo-holder">
            <StyledImage src={FooterLogo} alt="logo" />
          </div>{" "}
          <div className="logo-holder">
            <StyledImage src={FooterLogo} alt="logo" />
          </div>
        </Marquee>
      </FooterMarqueeWrapper>
    </div>
  );
};

// styles ---
const FooterMarqueeWrapper = styled.div`
  background: var(--clr-primary);
  width: 100%;
  padding: 16px 0px;
  border-radius: 0px 0px 16px 16px;

  .logo-holder {
    margin-right: 42px;
  }
`;
