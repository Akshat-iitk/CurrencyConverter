import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./index.css";
import { CurrBox } from "./components";
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const [submitted, setSubmitted] = useState(false);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
      >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <h1 className=" text-4xl mb-3  mx-9 font-semibold border-red-300 hover:opacity-80 cursor-pointer">Currency Convertor</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <CurrBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency) => {
                 return setAmount(amount);
                }
              }
              selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-500 duration-200"
                onClick={swap}
              >
                swap 
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrBox
              label="To" 
              amount={convertedAmount}
              currencyOptions={options}
              onAmountChange={(amount)=>setConvertedAmount(amount)}
              onCurrencyChange={(currency) => {
                 return  setTo(currency);
              }}
              selectCurrency = {to} 
              amountDisable={true}
               />

            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500 duration-200"
              
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
