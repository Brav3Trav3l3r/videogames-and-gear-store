import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import { Icon } from "@iconify/react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

export default function CartItem({ item }) {
  const { incrementItem, decrementItem } = useShoppingCart();

  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{item.title}</h3>
      <div className={styles.counter}>
        <button onClick={() => decrementItem(item.id)}>
          <Icon icon="fe:minus" />
        </button>
        <p>{item.quantity}</p>
        <button onClick={() => incrementItem(item.id)}>
          <Icon icon="fe:plus" />
        </button>
      </div>

      <h3 className={styles.price}>
        {formatCurrencyString({ value: item.value, currency: "USD" })}
      </h3>
    </div>
  );
}
