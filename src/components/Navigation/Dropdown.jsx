import React from "react";
import styles from "./Dropdown.module.css";
import { Icon } from "@iconify/react";

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <h1 className={styles.heading}>Cart</h1>

      <div className={styles.items}>
        <div className={styles.item}>
          <h3 className={styles.name}>God of war</h3>
          <div className={styles.counter}>
            <button>
              <Icon icon="fe:minus" />
            </button>
            <p>2</p>
            <button>
              <Icon icon="fe:plus" />
            </button>
          </div>

          <h3 className={styles.price}>₹300</h3>
        </div>
        <div className={styles.item}>
          <h3 className={styles.name}>God of war</h3>
          <div className={styles.counter}>
            <button>
              <Icon icon="fe:minus" />
            </button>
            <p>2</p>
            <button>
              <Icon icon="fe:plus" />
            </button>
          </div>

          <h3 className={styles.price}>₹300</h3>
        </div>
      </div>

      <hr />

      <div className={styles.total}>
        <h1 className={styles.heading}>Total</h1>
        <h3 className={styles.price}>₹600</h3>
      </div>

      <button className={styles.checkout}>CHECKOUT</button>
    </div>
  );
}
