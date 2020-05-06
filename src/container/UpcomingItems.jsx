import React from "react";
import Upcoming from "../components/Upcoming";
import useFetch from "../hooks/useFetch";

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
    <>
      <h1>Upcoming items</h1>
      <Upcoming>
        {upcomingItems.items.map((item) => (
          <div key={item.id}>
            <img src={item.images.background} alt={item.name} />
          </div>
        ))}
      </Upcoming>
    </>
  );
};
