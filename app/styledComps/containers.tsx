"use client";
import Image from "next/image";
import styled from "@emotion/styled";
import GreyHex from "../public/basics/greyHex.svg";

export const DashedContainer = ({
  leftTop,
  leftBottom,
  rightTop,
  rightBottom,
  borderTopNone,
  children,
}: {
  leftTop?: boolean;
  leftBottom?: boolean;
  rightTop?: boolean;
  rightBottom?: boolean;
  borderTopNone: string;
  children: any;
}) => {
  return (
    <Container borderTopNone={borderTopNone}>
      <div className="children-div">
        {children}

        {leftBottom && (
          <StyledImage
            className="hex-left-bottom"
            src={GreyHex}
            width="16"
            height="16"
            alt="Hex Left Bottom"
          />
        )}
      </div>

      {rightTop && (
        <StyledImage
          className="hex-right-top"
          src={GreyHex}
          width="16"
          height="16"
          alt="Hex Right Top"
        />
      )}
      {rightBottom && (
        <StyledImage
          className="hex-right-bottom"
          src={GreyHex}
          width="16"
          height="16"
          alt="Hex Right Bottom"
        />
      )}
    </Container>
  );
};

// styles --
export const Container = styled.section<{
  borderTopNone: string;
}>`
  position: relative;
  border-top: 1px dashed #d3d3d3;
  border-bottom: 1px dashed #d3d3d3;
  border-top: ${(prop) => (prop.borderTopNone ? prop.borderTopNone : "")};
  display: flex;
  justify-content: center;
  background-color: var(--clr-light);

  .hex-left-top {
    position: absolute;
    top: -7px;
    left: -7px;
    z-index: 3;
  }

  .hex-left-bottom {
    position: absolute;
    bottom: -7px;
    left: 6.5%;
    z-index: 1;
  }

  .hex-right-top {
    position: absolute;
    top: -7px;
    right: -8px;
    z-index: 1;
  }

  .hex-right-bottom {
    position: absolute;
    bottom: -7px;
    right: 6.5%;
    z-index: 1;
  }

  .children-div {
    border-left: 1px dashed #d3d3d3;
    border-right: 1px dashed #d3d3d3;
    margin-left: 7%;
    margin-right: 7%;
    width: 100%;
  }

  @media (max-width: 1920px) {
    .children-div {
      margin-left: 14%;
      margin-right: 14%;
    }

    .hex-left-bottom {
      position: absolute;
      left: 13.6%;
      z-index: 1;
    }

    .hex-right-bottom {
      position: absolute;
      right: 13.6%;
      z-index: 1;
    }
  }

  @media (max-width: 1440px) {
    .children-div {
      margin-left: 7%;
      margin-right: 7%;
      width: 100%;
    }
    .hex-left-bottom {
      position: absolute;
      left: 6.5%;
      z-index: 1;
    }

    .hex-right-bottom {
      position: absolute;
      right: 6.5%;
      z-index: 1;
    }
  }

  @media (max-width: 768px) {
    .children-div {
      margin-left: 16px;
      margin-right: 16px;
    }

    .hex-left-top {
      position: absolute;
      top: -7px;
      left: 9px;
      z-index: 3;
    }

    .hex-left-bottom {
      position: absolute;
      bottom: -7px;
      left: 9px;
      z-index: 1;
    }

    .hex-right-top {
      position: absolute;
      top: -7px;
      right: 9px;
      z-index: 1;
    }

    .hex-right-bottom {
      position: absolute;
      bottom: -7px;
      right: 9px;
      z-index: 1;
    }
  }
`;

// Styled Image component
export const StyledImage = styled(Image)<{
  width?: string | number;
  height?: string | number;
}>`
  display: block;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
`;

// Empty Container --------------------------------
const EmptyContainer = ({ height }: { height: string }) => {
  return (
    <DashedContainer
      leftTop={false}
      leftBottom={true}
      rightTop={false}
      rightBottom={true}
      borderTopNone="none"
    >
      <EmptyWrapper height={height}></EmptyWrapper>
    </DashedContainer>
  );
};

export default EmptyContainer;

//styles --
const EmptyWrapper = styled.div<{
  height: string;
}>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "100%")};

  @media (max-width: 768px) {
    height: 42px;
  }
`;
