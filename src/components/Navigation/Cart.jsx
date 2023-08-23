import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Cart.module.css";
import Dropdown from "./Dropdown";
import CartContext from "../../store/cart-context";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlighted, setIsHighlited] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length == 0) {
      return;
    }
    setIsHighlited(true);

    const timer = setTimeout(() => {
      setIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClass = `${styles.cartButton} ${isHighlighted ? styles.bump : ""}`;

  return (
    <>
      <div onClick={() => setIsOpen((prev) => !prev)} className={btnClass}>
        <Icon icon="lucide:shopping-cart" />
        <p>{items.length}</p>
      </div>

      {isOpen && <Dropdown />}
    </>
  );
}
