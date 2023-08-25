import React, { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Cart.module.css";
import Dropdown from "./Dropdown";
import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlighted, setIsHighlited] = useState(false);

  const { cartCount } = useShoppingCart();

  useEffect(() => {
    if (cartCount == 0) {
      return;
    }
    setIsHighlited(true);

    const timer = setTimeout(() => {
      setIsHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCount]);

  const btnClass = `${styles.cartButton} ${isHighlighted ? styles.bump : ""}`;

  return (
    <>
      <div onClick={() => setIsOpen((prev) => !prev)} className={btnClass}>
        <Icon icon="lucide:shopping-cart" />
        <p>{cartCount}</p>
      </div>

      {isOpen && <Dropdown />}
    </>
  );
}
