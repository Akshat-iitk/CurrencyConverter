import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
       return res.json();
      })
      .then((res) => {
    return setData(res[currency]);
      });
  }, [currency]);
  return data; // just  we are returning the state variable in this custom hook we have made
}
export default useCurrencyInfo;
