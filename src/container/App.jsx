import React from "react";
import styled from "styled-components";
import Store from "../components/Store";
import StoreItem from "../components/StoreItem";
import useFetch from "../hooks/useFetch";

const StyledApp = styled.div`
  margin-top: 30px;
`;

const StyledH1 = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 3px;
`;

const lang = navigator.language.slice(0, 2);
let url = `${process.env.REACT_APP_FORTNITE_API_URL}/shop?lang=${lang}`;
const config = {
  method: "GET",
  headers: { Authorization: process.env.REACT_APP_FORTNITE_API_TOKEN },
};
const defaultValues = {
  daily: [],
  featured: [],
  specialDaily: [],
  specialFeatured: [],
};

export default () => {
  const items = useFetch(url, config, defaultValues);
  return (
    <StyledApp>
      <StyledH1>Fortnite store today!!</StyledH1>

      {items.daily.length > 0 && (
        <Store category="daily">
          {items.daily.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </Store>
      )}

      {items.featured.length > 0 && (
        <Store category="feature">
          {items.featured.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </Store>
      )}

      {items.specialDaily.length > 0 && (
        <Store category="special daily">
          {items.specialDaily.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </Store>
      )}

      {items.specialFeatured.length > 0 && (
        <Store category="special feature">
          {items.specialFeatured.map((item) => (
            <StoreItem key={item.id} {...item} />
          ))}
        </Store>
      )}
    </StyledApp>
  );
};
