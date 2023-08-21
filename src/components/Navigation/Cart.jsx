import React from "react";
import { Icon } from "@iconify/react";
import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.cartButton}>
      <Icon icon="lucide:shopping-cart" />
      <p>2</p>
    </div>
  );
}
