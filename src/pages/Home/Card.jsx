import React, { useContext } from "react";
import styles from "./Card.module.css";
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

import CartContext from "../../store/cart-context";

export default function Card({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img align="top" src={item.poster} alt="" />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title.toUpperCase()}</h3>

        <div className={styles.interact}>
          <h2 className={styles.price}>
            {formatCurrencyString({ value: item.price, currency: "USD" })}
          </h2>
          <button
            className={styles.button}
            onClick={() => addItem(item)}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
