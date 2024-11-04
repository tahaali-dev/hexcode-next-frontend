import styled from "@emotion/styled";
import { StyledImage } from "./containers";

export const NavLink = ({ icon, title }: any) => {
  return (
    <StyledNav>
      <StyledImage
        src={icon}
        width="20"
        height="20"
        alt={`icon-${title}`}
        className="nav-icon"
      />
      <p>{title}</p>
    </StyledNav>
  );
};

const StyledNav = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p {
    color: #0b090a;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }

  .nav-icon {
    filter: grayscale(100%);
    transition: 0.3s ease;
  }

  :hover {
    .nav-icon {
      filter: grayscale(0%);
      transition: 0.3s ease;
    }
  }
`;
