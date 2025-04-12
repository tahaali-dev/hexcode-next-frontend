"use client";
import styled from "@emotion/styled";
import UnlimitedIcon from "../../../public/homepage/unlimited.svg";
import FastIcon from "../../../public/homepage/fast.svg";
import TeamIcon from "../../../public/homepage/entireteam.svg";
import CommunicationIcon from "../../../public/homepage/communication.svg";
import ContractsIcon from "../../../public/homepage/nocontracts.svg";
import CostsIcon from "../../../public/homepage/noextracost.svg";
import {
  HexSectionName,
  SectionSubHeading,
  SectionTitle,
} from "@/app/styledComps/texts";
import { PrimaryBtn } from "@/app/styledComps/buttons";
import { Benefitcard } from "@/app/styledComps/cards";
import { DashedContainer } from "@/app/styledComps/containers";
// Import other icons as needed

const benefitsData = [
  {
    icon: UnlimitedIcon,
    title: "Unlimited Requests",
    subtitle:
      "Request as many tasks as you need, with priority given to what matters most.",
  },
  {
    icon: FastIcon,
    title: "Quick Turnaround",
    subtitle: "Receive completed tasks in just 2-3 business days.",
  },
  {
    icon: CommunicationIcon,
    title: "Seamless Communication",
    subtitle:
      "Stay updated instantly through Slack for easy, direct communication.",
  },
  {
    icon: ContractsIcon,
    title: "No Contracts",
    subtitle:
      "Enjoy flexibility—stay as long as you like, with no long-term commitments.",
  },
  {
    icon: TeamIcon,
    title: "Collaborative Teamwork",
    subtitle:
      "Invite your team to manage tasks together, even when you're busy.",
  },

  {
    icon: CostsIcon,
    title: "Transparent Pricing",
    subtitle:
      "Enjoy a fixed monthly rate with no hidden fees—just complete transparency.",
  },
];

const Benefits = () => {
  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <BenefitsWrapper>
        <HexSectionName title="Subscription" />
        <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
          Great Designs, <br /> Done Quickly
        </SectionTitle>
        <SectionSubHeading className="mt-md text-lg">
          Get all our design services for a fixed monthly fee. <br /> Enjoy all
          the benefits.
        </SectionSubHeading>

        <div className="mt-lg">
          <PrimaryBtn
            padding="16px"
            fontSize="18px"
            margin="0"
            borderRadius="8px"
            btnContent="Get start today"
          />
        </div>

        <BenefitsCardHolder>
          {benefitsData.map((benefit, index) => (
            <Benefitcard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              subtitle={benefit.subtitle}
            />
          ))}
        </BenefitsCardHolder>
      </BenefitsWrapper>
    </DashedContainer>
  );
};

export default Benefits;

// Styles --
const BenefitsWrapper = styled.div`
  padding: 80px 0px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 8px;

    .w-full {
      width: 100%;
    }
  }
`;

const BenefitsCardHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-top: 64px;
  padding: 0px 106px;

  @media (max-width: 768px) {
    padding: 0px 0px;
    grid-template-columns: 1fr 1fr;
    gap: 38px 16px;
    margin-top: 32px;
  }
`;
