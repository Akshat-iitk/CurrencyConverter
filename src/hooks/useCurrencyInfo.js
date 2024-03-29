import { useEffect, useState } from "react";

function useCurrncyInfo(currency) {
  useEffect(() => {
    const [data, setData] = useState({});
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        res.json();
      })
      .then((res) => {
        setData(res[currency]);
      });
  }, [currency]);
  return data; // just  we are returning the state variable in this custom hook we have made
}
export default useCurrncyInfo;
