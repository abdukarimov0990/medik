import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const removeFromCart = (id) => {
    setSelectedCards((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ selectedCards, setSelectedCards, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
