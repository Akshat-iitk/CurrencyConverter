import React, { useId } from "react";
function CurrBox({
  label = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = " ",
}) {
  const amountInputId = useId(); //A good approch for optmizing react webapp
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/50 mb-2 w-full font-semibold">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none hover:font-semibold duration-200"
          value={selectCurrency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option className="hover:bg-blue-500 duration-200" key={currency} value={currency}>
                {/* remember to use key if you are looping jsx element */}
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default CurrBox;
