"use client";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./CommonComps/Header";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import gsap from "gsap";
import Head from "next/head";

const metadata: Metadata = {
  title: "Hexcode",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Handle Mouse Move
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

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./public/favicon.ico" />
        <link rel="apple-touch-icon" href="./public/favicon.ico" />
      </Head>

      <body id="main-body">
        <div>
          <Header />
          {children}
        </div>
        <Analytics />

        <CustomCursor id="custom-cursor"></CustomCursor>

      </body>
    </html>
  );
}

const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
