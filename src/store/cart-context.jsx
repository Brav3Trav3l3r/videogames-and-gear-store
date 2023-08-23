import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalAmount: 0,
  });

  const { items, totalAmount } = cart;

  const addItem = (item) => {
    const updatedAmount = cart.totalAmount + item.price;

    let updatedItems;

    const foundItemIndex = cart.items.findIndex((i) => i.id == item.id);

    const existingItem = cart.items[foundItemIndex]

    if (existingItem) {
      let updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };

      updatedItems = [...cart.items];
      updatedItems[foundItemIndex] = updatedItem;
    } else {
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      };

      updatedItems = cart.items.concat(newItem);
    }

    setCart({
      items: updatedItems,
      totalAmount: updatedAmount,
    });

    let newCart = {};
  };

  const removeItem = () => {
    console.log("remove");
  };

  return (
    <CartContext.Provider value={{ items, totalAmount, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;