import React from "react";
import styles from "./Card.module.css";

export default function Card({ game }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={game.poster} alt="" />
      </div>
      <h3 className={styles.title}>{game.title}</h3>

      <div className={styles.interact}>
        <h2 className={styles.price}>₹ {game.price}</h2>
        <button className={styles.button}>BUY</button>
      </div>
    </div>
  );
}
