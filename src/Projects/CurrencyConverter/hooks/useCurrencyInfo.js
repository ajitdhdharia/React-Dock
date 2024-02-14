import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  // Cannot pass an async function in useEffect because useEffect expects a cleanup function or nothing to be returned, not a promise.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const data = await response.json();
        setData(data[currency]);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
