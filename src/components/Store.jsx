import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const StyledStore = styled.div`
  margin: auto;
  width: 90%;
  @media screen and (max-width: 736px) {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  color: white;
  text-align: center;
  letter-spacing: 3px;
`;

export default ({ category, children }) => {
  return (
    <StyledStore>
      <StyledH2> {category} </StyledH2>
      <Grid nColumns="6"> {children} </Grid>
    </StyledStore>
  );
};
