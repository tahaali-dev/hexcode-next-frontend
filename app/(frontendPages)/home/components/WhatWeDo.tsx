"use client";
import styled from "@emotion/styled";
import curlyLine from "../../../public/basics/curlyline.svg";
import DummyHexImg from "../../../public/basics/dummyheximage.svg";
import ConsultingHexImg from "../../../public/homepage/consultingImage.svg";
import VIIcon from "../../../public/homepage/visualIdentity.svg";
import WPIcon from "../../../public/homepage/websiteandproduct.svg";
import CDIcon from "../../../public/homepage/creativedev.svg";
import ConIcon from "../../../public/homepage/consulting.svg";
import { useEffect, useRef, useState } from "react";
import { DashedContainer, StyledImage } from "@/app/styledComps/containers";
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

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// imports  ------------------------------------------------------------------------------------------------
const para1Vis = `Visual identity is the unique visual\nlanguage of your brand, creating\nmemorable impressions and\nemotional connections with your\naudience.`;
const para2Vis = `Logotype, Typography & Colour\nIllustrations & 3D\nPhotography Art Direction\nBrand Book & Guidelines\nAnimations\nVideo Production\nProduct Design`;

const para1Web = `Our website design services\nblend innovation and creativity to\ndeliver user-centric solutions\nthat elevate your brand and\nengage your audience.`;
const para2Web = `UX Design\nUser Testing\nProduct Prototype\nMobile UI\nSotware UI design\nWeb app design\nInteraction design`;

const para1Dev = `Visual identity is the unique visual\nlanguage of your brand, creating\nmemorable impressions and\nemotional connections with your\naudience.`;
const para2Dev = `Logotype, Typography & Colour\nIllustrations & 3D\nPhotography Art Direction\nBrand Book & Guidelines\nAnimations\nVideo Production\nProduct Design`;

const Consulting = `Our website design services blend innovation\nand creativity to deliver user-centric solutions\nthat elevate your brand and engage your\naudience.`;

const WhatWeDo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const lottieRef = useRef(null); // Create a ref for the Lottie animation

  const cardsData = [
    {
      title: "Visual Identity",
      bgcolor: "#81D0FF",
      para1: para1Vis,
      para2: para2Vis,
      image: DummyHexImg,
      icon: VIIcon,
    },
    {
      title: "Website & Product",
      bgcolor: "#C3ABFF",
      para1: para1Web,
      para2: para2Web,
      image: DummyHexImg,
      icon: WPIcon,
    },
    {
      title: "Creative Dev",
      bgcolor: "#FBC1D4",
      para1: para1Dev,
      para2: para2Dev,
      image: DummyHexImg,
      icon: CDIcon,
    },
    {
      title: "Consulting",
      bgcolor: "#181010",
      para1: Consulting,
      para2: "",
      image: ConsultingHexImg,
      icon: ConIcon,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cards = gsap.utils.toArray(".whatwedo-card") as HTMLElement[];
      const spacer = window.innerWidth <= 768 ? 64 : 118;

      if (cards.length > 0) {
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer} top+=15%`,
            endTrigger: ".cards-holder",
            end: `bottom top+=${500 + cards.length * spacer}`,
            pin: true,
            pinSpacing: false,
            id: `card-pin-${index}`,
            scrub: true,
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

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <WhatwedoWrapper>
        <HexSectionName title="What do we do" />
        <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
          A breakdown <br />
          of what we do
        </SectionTitle>
        <SectionSubHeading className="mt-md text-lg">
          Your go-to solution for web and mobile apps, <br />
          like many founders, startups, and agencies do.
        </SectionSubHeading>

        <LottieBox className="lottie-box">
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
    padding: 42px 4px 4px 4px;
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
