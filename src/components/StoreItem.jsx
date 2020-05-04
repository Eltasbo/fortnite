import React from "react";
import styled from "styled-components";

const StoreItem = styled.div`
  background-color: #f7f7f7;
`;

const StoreItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default ({ name, full_background }) => (
  <StoreItem>
    <StoreItemImg src={full_background} alt={name} />
  </StoreItem>
);
