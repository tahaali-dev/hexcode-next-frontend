"use client";
import styled from "@emotion/styled";
import VisualIdentityHex from "../../../public/homepage/visualIdentity.png";
import WebAndProduct from "../../../public/homepage/WebsiteandProductHex.svg";
import CreativeDev from "../../../public/homepage/CreativeDevHex.svg";
import ConsultingHexImg from "../../../public/homepage/ConsultingHex.svg";

import VisualIdentityMobile from "../../../public/homepage/vIMobile.png";
import WebAndProductMobile from "../../../public/homepage/wpMobile.png";
import CreativeDevMobile from "../../../public/homepage/cdMobile.png";
import ConsultingMobile from "../../../public/homepage/cnMobile.png";

import VIIcon from "../../../public/homepage/visualIdentity.svg";
import WPIcon from "../../../public/homepage/websiteandproduct.svg";
import CDIcon from "../../../public/homepage/creativedev.svg";
import ConIcon from "../../../public/homepage/consulting.svg";
import { useEffect, useRef, useState } from "react";
import { DashedContainer } from "@/app/styledComps/containers";
import {
  HexSectionName,
  SectionSubHeading,
  SectionTitle,
} from "@/app/styledComps/texts";
import { ConsultingCard, WhatWeDoCard } from "@/app/styledComps/cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from "@/app/utils/LottieAnimation";
import ArrowLottie from "../../../public/basics/arrow.json";
// Imports ----------

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// imports  ------------------------------------------------------------------------------------------------
const para1Vis = `Crafting memorable impressions and emotional \n connections with your audience that embarks your \n digital presence. `;
const para2Vis = `Logo Design\nBrand Color Palette & Typography Selection\nVisual Style GuidelinesBrand Collateral\nSocial Media Branding\nPackaging Design\nBrand Style Guide`;

const para1Web = `Creating intuitive and \n aesthetically  pleasing websites \n & products around  user-centric solutions that elevate\n your brand and engage your audience.`;
const para2Web = `User Research & Analysis\nWireframing & Mockups\nInteractive Prototyping\nDesign System\nMobile App Design (iOS & Android)\nResponsive Design`;

const para1Dev = `Bringing designs in actual existence by leveraging the \n latest technologies to develop robust and scalable \n solutions.`;
const para2Dev = `Full-Stack Development\nE-Commerce Development\nSaaS Development
No-Code Development
Website Development`;

const Consulting = `Our website design services blend innovation\nand creativity to deliver user-centric solutions\nthat elevate your brand and engage your\naudience.`;

const WhatWeDo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const cardsData = [
    {
      title: "Visual Identity",
      bgcolor: "#81D0FF",
      para1: para1Vis,
      para2: para2Vis,
      image: VisualIdentityHex,
      icon: VIIcon,
      mobileImage: VisualIdentityMobile,
    },
    {
      title: "Website & Product",
      bgcolor: "#C3ABFF",
      para1: para1Web,
      para2: para2Web,
      image: WebAndProduct,
      icon: WPIcon,
      mobileImage: WebAndProductMobile,
    },
    {
      title: "Creative Dev",
      bgcolor: "#FBC1D4",
      para1: para1Dev,
      para2: para2Dev,
      image: CreativeDev,
      icon: CDIcon,
      mobileImage: CreativeDevMobile,
    },
    {
      title: "Consulting",
      bgcolor: "#181010",
      para1: Consulting,
      para2: "",
      image: ConsultingHexImg,
      icon: ConIcon,
      mobileImage: ConsultingMobile,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = gsap.utils.toArray(".whatwedo-card") as HTMLElement[];
      const spacer = window.innerWidth <= 768 ? 64 : 118;

      if (cards.length > 0 && window.innerWidth > 768) {
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} ${
              window.innerWidth > 768 ? "top+=15%" : "top+=8%"
            }`,

            endTrigger: ".cards-holder",
            end: `bottom top+=99%`,

            pin: true,
            pinSpacing: false,
            id: `card-pin-${index}`,
            scrub: true,
            // markers: true,
          });
        });
      }

      ScrollTrigger.create({
        trigger: ".lottie-box",
        start: "top 85%",
        // markers: true,
        scrub: true,
        onEnter: () => setIsPlaying(true),
        onLeaveBack: () => setIsPlaying(false),
      });

      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  // UseEffect to ensure the `window` object is accessed only on the client
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value for `isMobile`
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <WhatwedoWrapper>
        <HexSectionName title="Our Capabilities" />
        <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
          Overview of <br /> our services
        </SectionTitle>
        <SectionSubHeading className="mt-md text-lg">
          Your All-in-One Partner for Digital Excellence
          {/* Your go-to solution for web and mobile apps, {!isMobile ? <br /> : ""}
          like many founders, startups, and agencies do. */}
        </SectionSubHeading>

        <LottieBox className="lottie-box m-none">
          <LottieAnimation
            animationData={ArrowLottie}
            loop={false}
            isPlaying={isPlaying}
          />
        </LottieBox>

        <div className="cards-holder">
          {cardsData.map((card, index) =>
            card.title === "Consulting" ? (
              <div className="whatwedo-card mh-402" key={index}>
                <ConsultingCard
                  title={card.title}
                  bgcolor={card.bgcolor}
                  para1={card.para1}
                  image={card.image}
                  icon={card.icon}
                  mobileImage={card.mobileImage}
                />
              </div>
            ) : (
              <div className="whatwedo-card " key={index}>
                <WhatWeDoCard
                  title={card.title}
                  bgcolor={card.bgcolor}
                  para1={card.para1}
                  para2={card.para2}
                  image={card.image}
                  icon={card.icon}
                  mobileImage={card.mobileImage}
                />
              </div>
            )
          )}
        </div>
      </WhatwedoWrapper>
    </DashedContainer>
  );
};

export default WhatWeDo;

// styles --
const WhatwedoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0px 0px 0px;

  .cards-holder {
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding: 24px 4px 4px 4px;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 32px 0px 0px 0px;

    .mt-lg {
      margin-top: 16px;
    }

    .mh-402 {
      min-height: 422px;
    }

    .cards-holder {
      gap: 24px;
      padding: 32px 4px 4px 4px;
    }
  }
`;

const LottieBox = styled.div`
  rotate: 180deg;
  width: 198px;
`;

// Desktop -------
// 1920 x 1080
// 1536 x 864
// 1440 x 900
// 1366 x 768
// 1280 x 720

// Tablet -------
// 1280 x 800
// 820 x 1180
// 810 x 1080
// 800 x 1280
// 768 x 1024
// 601 x 962

// Mobile -------
// 360 x 800
// 390 x 844
// 393 x 873
// 412 x 915
