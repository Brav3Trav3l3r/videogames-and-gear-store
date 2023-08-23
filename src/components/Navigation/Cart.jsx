import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Cart.module.css";
import Dropdown from "./Dropdown";
import CartContext from "../../store/cart-context";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const cartCtx = useContext(CartContext);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.cartButton}
      >
        <Icon icon="lucide:shopping-cart" />
        <p>{cartCtx.items.length}</p>
      </div>

      {isOpen && <Dropdown />}
    </>
  );
}
