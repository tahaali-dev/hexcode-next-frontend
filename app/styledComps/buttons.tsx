import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";

export const PrimaryBtn = ({
  padding,
  fontSize,
  margin,
  borderRadius,
  btnContent,
}: {
  padding: string;
  fontSize: string;
  margin: string;
  borderRadius: string;
  btnContent: string;
}) => {
  const numberOfRows: any = 5;
  const shades = ["#4A0507", "#881418", "#A50F14", "#C80D13", "#EE232A"];
  const shadeContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const shadeBlocks: any =
      shadeContainerRef.current?.querySelectorAll(".shade");

    // Set initial yPercent and opacity for the bottom-to-top effect, hidden initially
    gsap.set(shadeBlocks, { yPercent: 100, opacity: 0 });

    const hoverAnimation = gsap.timeline({ paused: true });
    shadeBlocks?.forEach((shade: any, index: number) => {
      hoverAnimation.to(
        shade,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        },
        index * 0.1 // Staggering each shade
      );
    });

    const btnElement = shadeContainerRef.current?.parentElement;

    if (btnElement) {
      btnElement.addEventListener("mouseenter", () => hoverAnimation.play());
      btnElement.addEventListener("mouseleave", () => hoverAnimation.reverse());
    }

    return () => {
      if (btnElement) {
        btnElement.removeEventListener("mouseenter", () =>
          hoverAnimation.play()
        );
        btnElement.removeEventListener("mouseleave", () =>
          hoverAnimation.reverse()
        );
      }
    };
  }, []);

  return (
    <ButtonWrapper padding={padding} fontSize={fontSize} className="w-full">
      <span>{btnContent}</span>
      <GradientContainer
        ref={shadeContainerRef}
        margin={margin}
        borderRadius={borderRadius}
        numberOfRows={numberOfRows}
      >
        {shades.map((shade: string, index: number) => (
          <ShadeBlock
            key={index}
            className="shade"
            style={{ backgroundColor: shade }}
          />
        ))}
      </GradientContainer>
    </ButtonWrapper>
  );
};

// styles for the button and gradient container
const ButtonWrapper = styled.button<{
  padding: string;
  fontSize: string;
}>`
  position: relative;
  border-radius: 8px;
  background: var(--Brand-red-red-500, #ee232a);
  box-shadow: 2px 2px 12px 0px rgba(238, 35, 42, 0.15);
  padding: ${(prop) => (prop.padding ? prop.padding : "")};
  font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "16px")};
  border: none;
  cursor: pointer;
  color: var(--white-color);
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.64px;
  overflow: hidden;

  span {
    z-index: 1;
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const GradientContainer = styled.div<{
  margin: string;
  borderRadius: string;
  numberOfRows: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(${(prop) => prop.numberOfRows}, 1fr);
  border-radius: ${(prop) => prop.borderRadius};
  overflow: hidden;
  margin-top: ${(prop) => prop.margin};
  z-index: 0;
`;

const ShadeBlock = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0; /* Hidden by default */
`;

export const SecondaryBtn = styled.button`
  border-radius: 8px;
  background: #232a2f;
  padding: 12px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
s`;

export const TertiaryBtn = styled.button<{
  padding: string;
  fontSize: string;
}>`
  border-radius: 8px;
  background: var(--white-color);
  padding: ${(prop) => (prop.padding ? prop.padding : "")};
  font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "16px")};
  border: 1px solid var(--clr-light2);
  cursor: pointer;

  color: var(--tertiary-color);
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
`;
