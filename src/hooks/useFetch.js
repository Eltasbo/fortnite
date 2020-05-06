import { useState, useEffect } from "react";

export default (url, config = {}, defaultValues = {}) => {
  const [items, setItems] = useState(defaultValues);

  useEffect(() => {
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, [url, config, defaultValues]);

  return items;
};
