import { createContext, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  addProduct: () => {},
  removeProduct: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalAmount: 0,
  });

  const { addItem, removeItem } = useShoppingCart();

  const addProduct = (item) => {
    const updatedAmount = cart.totalAmount + item.price;

    let updatedItems;

    const foundItemIndex = cart.items.findIndex((i) => i.id == item.id);

    const existingItem = cart.items[foundItemIndex];

    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

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

    addItem(item)
  };

  const removeProduct = (id) => {
    const foundItemIndex = cart.items.findIndex((i) => i.id === id);
    const existingItem = cart.items[foundItemIndex];

    const updatedAmount = cart.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.quantity == 1) {
      updatedItems = cart.items.filter((i) => i.id !== id);
    } else {
      let updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };

      updatedItems = [...cart.items];

      updatedItems[foundItemIndex] = updatedItem;
    }

    setCart({
      items: updatedItems,
      totalAmount: updatedAmount,
    });

    removeItem(id)
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        totalAmount: cart.totalAmount,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
