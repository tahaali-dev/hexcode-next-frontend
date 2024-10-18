import styled from "@emotion/styled";

const GradientShades = ({
  shades,
  margin,
  borderRadius,
  numberOfRows,
}: any) => {
  return (
    <GradientContainer
      margin={margin}
      borderRadius={borderRadius}
      numberOfRows={numberOfRows}
    >
      {shades.map((shade: any, index: any) => (
        <ShadeBlock key={index} style={{ backgroundColor: shade }}></ShadeBlock>
      ))}
    </GradientContainer>
  );
};

export default GradientShades;

// styles  ---
const GradientContainer = styled.div<{
  margin: string;
  borderRadius: string;
  numberOfRows: string;
}>`
  display: grid;
  grid-template-rows: repeat(10 ${(prop) => prop.numberOfRows}, 1fr);
  width: 100%;

  border-radius: ${(prop) => prop.borderRadius};
  overflow: hidden;
  margin-top: ${(prop) => prop.margin};
`;

const ShadeBlock = styled.div`
  width: 100%;
  height: 100%;
  height: 10px;
`;
