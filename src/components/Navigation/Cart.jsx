import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./Cart.module.css";
import Dropdown from "./Dropdown";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.cartButton}
      >
        <Icon icon="lucide:shopping-cart" />
        <p>2</p>
      </div>

      {isOpen && <Dropdown />}
    </>
  );
}
