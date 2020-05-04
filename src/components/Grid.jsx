import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2vh;
  padding: 2vh;
  grid-template-columns: repeat(
    ${(props) => (props.nColumns ? Math.round(props.nColumns) : 6)},
    1fr
  );
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(
      ${(props) => (props.nColumns ? Math.round(props.nColumns / 1.5) : 4)},
      1fr
    );
  }

  @media screen and (max-width: 736px) {
    grid-template-columns: repeat(
      ${(props) => (props.nColumns ? Math.round(props.nColumns / 3) : 2)},
      1fr
    );
  }
`;

export default ({ nColumns, children }) => (
  <StyledGrid nColumns={nColumns}> {children} </StyledGrid>
);
