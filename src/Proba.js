import React, { useState, useEffect } from "react";

function CryptoConverter() {
  const [amount, setAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [cryptos, setCryptos] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((response) => response.json())
      .then((data) => {
        // Filter out the coins from CoinGecko's list
        const filteredCryptos = data.filter((coin) => coin.id);
        setCryptos(filteredCryptos);
      });

    fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies")
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  const convertCurrency = () => {
    if (selectedCrypto && amount) {
      fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=${selectedCurrency}`
      )
        .then((response) => response.json())
        .then((data) => {
          const rate = parseFloat(data[selectedCrypto][selectedCurrency]);
          const convertedAmount = parseFloat(amount) * rate;
          setResult(convertedAmount.toFixed(2));
        });
    } else {
      console.error("Please select a cryptocurrency and enter an amount.");
    }
  };

  return (
    <div className="container">
      <h1>Crypto Converter</h1>
      <select
        value={selectedCrypto}
        onChange={(e) => setSelectedCrypto(e.target.value)}
      >
        <option value="">Select Cryptocurrency</option>
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            {crypto.name}
          </option>
        ))}
      </select>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <br />
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
      <br />
      <button onClick={convertCurrency}>Convert</button>
      {result && (
        <p>
          Converted Amount: {result} {selectedCurrency.toUpperCase()}
        </p>
      )}
    </div>
  );
}
//
export default CryptoConverter;
