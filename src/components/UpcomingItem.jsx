import React from "react";
import styled from "styled-components";

const StyledUpcomingItem = styled.div`
  img {
    width: 100%;
  }
`;

export default ({ images, name }) => (
  <StyledUpcomingItem>
    <img src={images.background} alt={name} />
  </StyledUpcomingItem>
);
