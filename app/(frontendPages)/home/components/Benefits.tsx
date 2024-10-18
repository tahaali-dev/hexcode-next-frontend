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
    title: "Unlimited requests",
    subtitle: "Unlimited task requests, prioritized \n as you like.",
  },
  {
    icon: FastIcon,
    title: "Fast turnaround",
    subtitle: "Tasks delivered in just 2-3 working \n business days.",
  },
  {
    icon: CommunicationIcon,
    title: "Easy communication",
    subtitle: "Communicate via Slack for instant updates.",
  },
  {
    icon: ContractsIcon,
    title: "No contracts",
    subtitle: "No contracts. Stay if you love it, \n leave when you want!",
  },
  {
    icon: TeamIcon,
    title: "Your entire team",
    subtitle: "Busy? Invite your team to manage \n tasks together.",
  },

  {
    icon: CostsIcon,
    title: "No extra costs",
    subtitle:
      "Enjoy a fixed monthly rate with no \n surprises, just transparency.",
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
        <HexSectionName title="Benefits of subscriptions" />
        <SectionTitle fontSize="54px" lineHeight="64px" className="mt-lg">
          Get world-class <br /> designs, faster
        </SectionTitle>
        <SectionSubHeading className="mt-md text-lg">
          Get all our design services for a fixed monthly fee. <br />
          Enjoy all the benefits.
        </SectionSubHeading>
        <PrimaryBtn padding="16px" fontSize="18px" className="mt-lg w-full">
          Get start today
        </PrimaryBtn>

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
    padding: 0px 18px;
    grid-template-columns: 1fr 1fr;
    gap: 38px 16px;
    margin-top: 32px;
  }
`;
