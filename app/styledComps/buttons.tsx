import styled from "@emotion/styled";

export const PrimaryBtn = styled.button<{
  padding: string;
  fontSize: string;
}>`
  border-radius: 8px;
  background: var(--Brand-red-red-500, #ee232a);
  box-shadow: 2px 2px 12px 0px rgba(238, 35, 42, 0.15);
  padding: ${(prop) => (prop.padding ? prop.padding : "")};
  font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "16px")};

  border: none;
  cursor: pointer;

  color: var(--white-color);
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  letter-spacing: 0.64px;
`;

export const SecondaryBtn = styled.button`
  border-radius: 8px;
  background: #232a2f;
  padding: 8px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
s`;

export const TertiaryBtn = styled.button<{
  padding: string;
  fontSize: string;
}>`
  border-radius: 8px;
  background: var(--white-color);
  padding: ${(prop) => (prop.padding ? prop.padding : "")};
  font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "16px")};
  border: 1px solid var(--clr-light2);
  cursor: pointer;

  color: var(--tertiary-color);
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
`;
