import React from "react";
import styled from "styled-components";
import Upcoming from "../components/Upcoming";
import UpcomingItem from "../components/UpcomingItem";
import useFetch from "../hooks/useFetch";

const StyledApp = styled.div`
  margin-top: 30px;
`;

const StyledH1 = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 3px;
`;

const url = `${process.env.REACT_APP_FORTNITE_API_URL}/items/upcoming`;
const config = {
  method: "GET",
  headers: { Authorization: process.env.REACT_APP_FORTNITE_API_TOKEN },
};
const defaultValues = {
  items: [],
};

export default () => {
  const upcomingItems = useFetch(url, config, defaultValues);
  return (
    <StyledApp>
      <StyledH1>Upcoming items</StyledH1>
      <Upcoming>
        {upcomingItems.items.map((item) => (
          <UpcomingItem key={item.id} {...item} />
        ))}
      </Upcoming>
    </StyledApp>
  );
};
