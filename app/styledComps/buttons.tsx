import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";

// Button component with the gradient shades animation
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
    gsap.set(shadeBlocks, { opacity: 0 });

    const hoverAnimation = gsap.timeline({ paused: true });
    shadeBlocks?.forEach((shade: any, index: number) => {
      hoverAnimation.to(
        shade,
        {
          opacity: 1,
          duration: 0.1,
          ease: "power1.inOut",
        },
        index * 0.1 // delay between each shade appearance
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
  height: 10px;
  opacity: 0;
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
