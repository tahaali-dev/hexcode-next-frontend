"use client";
import { useEffect } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";

export default function CustomCursor() {
 useEffect(() => {
  let posX = 0,
   posY = 0;
  let mouseX = 0,
   mouseY = 0;

  const updateCursor = gsap.to("#custom-cursor", {
   duration: 0.01,
   ease: "power3.out",
   repeat: -1,
   onRepeat: () => {
    posX += (mouseX - posX) / 10;
    posY += (mouseY - posY) / 10;

    gsap.set("#custom-cursor", {
     css: {
      left: posX - 1,
      top: posY - 2,
     },
    });
   },
  });

  const handleMouseMove = (e: MouseEvent) => {
   mouseX = e.clientX;
   mouseY = e.clientY;
  };

  document
   .getElementById("main-body")
   ?.addEventListener("mousemove", handleMouseMove);

  return () => {
   document
    .getElementById("main-body")
    ?.removeEventListener("mousemove", handleMouseMove);
   updateCursor.kill();
  };
 }, []);

 return <CustomCursorStyled id="custom-cursor" />;
}

const CustomCursorStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
