"use client";
import { PrimaryBtn } from "@/app/styledComps/buttons";
import { AccordionCard } from "@/app/styledComps/cards";
import { DashedContainer } from "@/app/styledComps/containers";
import {
  HexSectionName,
  SectionSubHeading,
  SectionTitle,
} from "@/app/styledComps/texts";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FAQ = () => {
  // Step 1: Create an array of objects for FAQs
  const faqData = [
    {
      title: "What services do you offer as a design agency?",
      content: (
        <p className="px-lg pb-lg color-02">
          We offer a range of design services, including website design, mobile
          app design, UX/UI design, product strategy, branding, and custom
          graphic design. Our goal is to create exceptional digital experiences
          that align with your brand and engage your audience.
        </p>
      ),
    },
    {
      title: "How much does a design project cost?",
      content: (
        <p className="px-lg pb-lg color-02">
          The cost of a design project depends on its scope and complexity. We
          offer fixed pricing or hourly rates based on your specific needs.
          Contact us for a free consultation and quote tailored to your project.
        </p>
      ),
    },
    {
      title: "What is your design process?",
      content: (
        <p className="px-lg pb-lg color-02">
          Our process includes discovery, research, wireframing, design
          development, feedback loops, and final delivery. We work closely with
          you to understand your needs and goals, ensuring the final design
          reflects your vision and enhances user experience.
        </p>
      ),
    },
    {
      title: "How do you ensure the designs are user-friendly?",
      content: (
        <p className="px-lg pb-lg color-02">
          We prioritize user experience (UX) in every design. Our team conducts
          research, testing, and usability studies to ensure your design is
          intuitive, accessible, and optimized for your audience’s needs.
        </p>
      ),
    },

    {
      title:
        "Do you offer ongoing design support after the project is completed?",
      content: (
        <p className="px-lg pb-lg color-02">
          Absolutely! We offer ongoing support, including updates, revisions,
          and maintenance, to ensure your digital product stays current and
          continues to perform at its best.
        </p>
      ),
    },
    {
      title: "How do I start a design project with your agency?",
      content: (
        <p className="px-lg pb-lg color-02">
          Starting is easy! Reach out to us via our contact page or schedule a
          free consultation. We’ll discuss your project, goals, and timeline,
          and begin crafting a custom solution for your business.
        </p>
      ),
    },
    {
      title: "How do I communicate with your team during the project?",
      content: (
        <p className="px-lg pb-lg color-02">
          We make communication easy through tools like Slack, email, and
          project management platforms. You’ll receive regular updates and have
          direct access to our team for feedback and collaboration.
        </p>
      ),
    },
    {
      title: "Why should I choose your design agency?",
      content: (
        <p className="px-lg pb-lg color-02">
          We combine creativity with strategy to deliver designs that drive
          results. Our team is dedicated to understanding your goals and
          crafting designs that not only look great but also perform well,
          helping you connect with your audience and grow your business.
        </p>
      ),
    },
  ];

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Return null until the component is mounted on the client
  }

  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <FaqHeadingWrapper>
        <HexSectionName title="FAQ" />
        <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
          Frequently <br />
          asked questions
        </SectionTitle>

        <SectionSubHeading className="mt-md">
          Still have questions? <u>Drop us a line</u>
        </SectionSubHeading>
      </FaqHeadingWrapper>
      <AccordionsWrapper>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          className="projects-holder"
        >
          <Masonry columnsCount={2} className="g-lg">
            {faqData.map((faq, index) => (
              <AccordionCard key={index} title={faq.title}>
                {faq.content}
              </AccordionCard>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </AccordionsWrapper>
    </DashedContainer>
  );
};

export default FAQ;

// Styled components remain unchanged
const FaqHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 64px 64px 64px;

  h1 {
    text-align: left !important;
  }

  @media (max-width: 768px) {
    padding: 32px 8px;
    align-items: center;

    .f-column {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      margin-top: 8px;
    }
    h1 {
      text-align: center !important;
    }

    .w-full {
      width: 100%;
    }
  }
`;

const AccordionsWrapper = styled.div`
  padding: 0px 64px 80px 64px;

  .color-02 {
    color: var(--clr-dark2);
  }

  @media (max-width: 768px) {
    padding: 4px;
  }
`;
