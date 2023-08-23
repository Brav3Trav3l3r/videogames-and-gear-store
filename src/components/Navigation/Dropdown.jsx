import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import { Icon } from "@iconify/react";
import CartContext from "../../store/cart-context";

export default function Dropdown() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.dropdown}>
      <h1 className={styles.heading}>Cart</h1>

      <div className={styles.items}>
        {cartCtx.items.length ? (
          cartCtx.items.map((i) => (
            <div key={i.id} className={styles.item}>
              <h3 className={styles.name}>{i.title}</h3>
              <div className={styles.counter}>
                <button>
                  <Icon icon="fe:minus" />
                </button>
                <p>{i.quantity}</p>
                <button>
                  <Icon icon="fe:plus" />
                </button>
              </div>

              <h3 className={styles.price}>₹{i.amount}</h3>
            </div>
          ))
        ) : (
          <p>Your cart looks empty. Start adding something</p>
        )}
      </div>

      <hr />

      <div className={styles.total}>
        <h1 className={styles.heading}>Total</h1>
        <h3 className={styles.price}>₹{cartCtx.totalAmount}</h3>
      </div>

      <button className={styles.checkout}>CHECKOUT</button>
    </div>
  );
}
