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
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FAQ = () => {
  // Step 1: Create an array of objects for FAQs
  const faqData = [
    {
      title: "How much work will I get each month?",
      content: (
        <p className="px-lg pb-lg color-02">
          Great question! The first step is to get in touch by filling out our
          contact form, which you’ll find here. We usually start
        </p>
      ),
    },
    {
      title: "What are your payment terms?",
      content: (
        <p className="px-lg pb-lg color-02">
          Our payment terms are typically net 30 days after receipt of invoice.
          Feel free to contact us for more details.
        </p>
      ),
    },
    {
      title: "Can I get a refund?",
      content: (
        <p className="px-lg pb-lg color-02">
          We have a satisfaction guarantee policy. If you are not satisfied,
          please reach out to discuss possible solutions.
        </p>
      ),
    },
  ];

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

        <div className=" d-flex align-end justify-between w-100 f-column">
          <SectionSubHeading>
            Still have questions? <u>Drop us a line</u>
          </SectionSubHeading>

          <PrimaryBtn
            padding="16px"
            fontSize="18px"
            margin="0"
            borderRadius="8px"
            btnContent="book a call"
          />
        </div>
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
    color: var(--color-002);
  }

  @media (max-width: 768px) {
    padding: 4px;
  }
`;
