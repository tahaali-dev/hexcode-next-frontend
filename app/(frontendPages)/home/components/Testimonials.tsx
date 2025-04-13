import React, { useEffect, useRef, useState } from "react";
import { DashedContainer, StyledImage } from "@/app/styledComps/containers";
import { HexSectionName, SectionTitle } from "@/app/styledComps/texts";
import styled from "@emotion/styled";
import clientData from "../../../utils/testimonials";
import Chat from "@/app/styledComps/TextBubble";
import ProfileRingTimer from "@/app/styledComps/ProfileTimerRing";
import Logo from "../../../public/homepage/voltLogo.svg";
import { useTestimonials } from "@/app/customHooks/testimonials";

const Testimonials = () => {
  const {
    activeIndex,
    scrollRef,
    bubblesRef,
    handleCardClick,
    testimonialsRef,
  } = useTestimonials({
    clientData,
  });

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      {/* Heading Section */}
      <div>
        <SliderHeadingWrapper>
          <HexSectionName title="Testimonials" />
          <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
            Words from our partners
          </SectionTitle>
        </SliderHeadingWrapper>
      </div>

      {/* Testimonial Section */}
      <TestimonialsContainer ref={testimonialsRef}>
        {/* Clients Section */}
        <div className="clients c-scroll" ref={scrollRef}>
          {clientData.map((client: any, index: number) => (
            <ClientCard
              key={index}
              className={index === activeIndex ? "active-client-card" : ""}
              onClick={() => handleCardClick(index)}
            >
              {activeIndex === index ? (
                <ProfileRingTimer
                  imageSrc={client.clientImage}
                  alt={`profile-img-${index}`}
                  testimonialsRef={testimonialsRef}
                />
              ) : (
                <StyledImage
                  src={client.clientImage}
                  alt={`profile-img`}
                  width={58}
                  height={58}
                  className="rounded-50"
                />
              )}
              <div className="d-flex flex-column m-none">
                <h5 className="clr-dark text-lg text-w-600">{client.name}</h5>
                <span className="clr-dark3 text-md">{client.description}</span>
              </div>
            </ClientCard>
          ))}
        </div>

        {/* Chat-box Section */}
        <div className="chat-box chatbox-bg">
          <div className="chat-box-header">
            <div className="d-flex g-md align-center">
              <StyledImage
                src={clientData[activeIndex].clientImage}
                alt={`project-banner`}
                className="rounded-50 m-none"
                width={48}
                height={48}
              />
              <div className="d-flex flex-column ">
                <h5 className="clr-dark text-lg text-w-400">
                  {clientData[activeIndex].name}
                </h5>
                <span className="clr-dark3 text-md">
                  {clientData[activeIndex].position}
                </span>
              </div>
            </div>
            <StyledImage
              src={clientData[activeIndex].clientCompanyLogo}
              alt={`project-banner`}
              width={60}
              height={24}
            />
          </div>

          {/* Chat Bubbles */}
          <div className="bubbles-container">
            {clientData[activeIndex].messages.map((msg: any, idx: number) => (
              <div
                key={idx}
                className="bubble-wrapper"
                ref={(el: any) => (bubblesRef.current[idx] = el!)}
              >
                <Chat message={msg.message} />
              </div>
            ))}
          </div>
        </div>
      </TestimonialsContainer>
    </DashedContainer>
  );
};

export default Testimonials;

// Styled Components
const SliderHeadingWrapper = styled.div`
  padding: 62px 0px;
  @media (max-width: 768px) {
    padding: 32px 0px;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;
  border-radius: 16px;
  width: 100%;
  overflow: hidden;
  background-color: var(--white-color);
  min-height: 450px;

  .clients {
    width: 35%;
    background-color: var(--white-color);
    padding: 16px;
    max-height: 50vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .chat-box {
    width: 65%;
    border-radius: 16px;

    .chat-box-header {
      background-color: var(--white-color);
      padding: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--Black-black-200, #eae1e1);
    }
  }

  .bubbles-container {
    height: calc(100% - 103px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 16px;
    padding: 24px;
  }

  .active-client-card {
    background-color: #fff1f1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: transparent;

    .clients {
      width: 90vw;
      background-color: transparent;
      overflow-y: scroll;
      display: flex;
      flex-direction: row;
      gap: 22px;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    .chat-box {
      width: 100%;

      .chat-box-header {
        padding: 16px 24px;
      }
    }

    .active-client-card {
      background-color: transparent;
    }
  }
`;

const ClientCard = styled.div`
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: 0.3s ease all;
  cursor: pointer;

  :hover {
    background-color: #fff1f1;
    transition: 0.3s ease all;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;
