//@ts-nocheck
import { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import FooterLogo from "../public/homepage/footerlogo.svg";
import styled from "@emotion/styled";
import { StyledImage } from "./containers";

export const FooterMarquee: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to set `isMobile` only on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <FooterMarqueeWrapper>
        <Marquee velocity={isMobile ? 8 : 25} direction={"rtl"}>
          {[...Array(5)].map((_, index) => (
            <div className="logo-holder" key={index}>
              <StyledImage src={FooterLogo} alt="logo" />
            </div>
          ))}
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
