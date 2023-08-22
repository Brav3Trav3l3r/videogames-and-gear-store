import React from "react";
import styles from "./Card.module.css";

export default function Card({ item }) {
  return (
    <div className={styles.card}>
      <img align='top' src={item.poster} alt="" />
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title.toUpperCase()}</h3>

        <div className={styles.interact}>
          <h2 className={styles.price}>₹ {item.price}</h2>
          <button className={styles.button}>BUY</button>
        </div>
      </div>
    </div>
  );
}
