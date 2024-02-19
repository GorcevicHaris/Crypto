import React, { createContext, useState } from "react";
const CartContext = createContext();
function Context({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState();
  return (
    <CartContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
        changer,
        search,
        setSearch,
        data,
        setData,
        period,
        setPeriod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
  function changer(e) {
    setSelectedCurrency(e.target.value);
  }
}

export default Context;
export { CartContext };
