import styled from "@emotion/styled";
import RedHex from "../public/basics/redHex.svg";
import { StyledImage } from "./containers";

export const SectionTitle = styled.h1<{
  fontSize: string;
  lineHeight: string;
}>`
  text-align: center;
  font-size: ${(prop) => prop.fontSize};
  line-height: ${(prop) => prop.lineHeight};
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  /* Apply styles for large screens (above 1024px) */
  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 58px;
  }

  /* Apply styles for medium screens (below 768px) */
  @media (max-width: 768px) {
    font-size: 38px;
    line-height: 48px;
  }
`;

export const SectionTitle2 = styled.p`
  text-transform: uppercase;
  color: var(--clr-dark3);
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HexSectionName = ({ title }: { title: string }) => {
  return (
    <HexSectionBox className="d-flex align-center justify-center g-sm">
      <StyledImage src={RedHex} width="16" height="16" alt={`hex`} />
      <h2 className="text-secondary text-Uppercase text-lg text-w-400">
        {title}
      </h2>
    </HexSectionBox>
  );
};

export const HexSectionBox = styled.div`
  @media (max-width: 768px) {
    .text-lg {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const SectionName = styled.p`
  text-transform: uppercase;
  color: var(--clr-dark3);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 23px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SectionSubHeading = styled.p`
  color: var(--clr-dark2);
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HighlightText = styled.span`
  color: var(--clr-primary-l1);
  min-width: ;
`;

export const LightText = styled.p`
  color: var(--clr-dark3);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;
