import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Upcoming = styled.div`
  width: 80%;
  margin: auto;
`;

export default ({ children }) => (
  <Upcoming>
    <Grid nColumns="6">{children}</Grid>
  </Upcoming>
);
