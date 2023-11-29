import React, { createContext, useState } from "react";
const CartContext = createContext();
function Context({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <CartContext.Provider
      value={{ selectedCurrency, setSelectedCurrency, changer }}
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
