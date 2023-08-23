import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import { Icon } from "@iconify/react";
import CartContext from "../../store/cart-context";

export default function CartItem({ i }) {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles.item}>
      <h3 className={styles.name}>{i.title}</h3>
      <div className={styles.counter}>
        <button onClick={() => cartCtx.removeItem(i.id)}>
          <Icon icon="fe:minus" />
        </button>
        <p>{i.quantity}</p>
        <button onClick={() => cartCtx.addItem(i)}>
          <Icon icon="fe:plus" />
        </button>
      </div>

      <h3 className={styles.price}>₹{i.price * i.quantity}</h3>
    </div>
  );
}
