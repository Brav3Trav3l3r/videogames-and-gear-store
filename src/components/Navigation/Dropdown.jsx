import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { formatCurrencyString } from "use-shopping-cart";


export default function Dropdown() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.dropdown}>
      <h1 className={styles.heading}>Cart</h1>

      <div className={styles.items}>
        {cartCtx.items.length ? (
          cartCtx.items.map((i) => <CartItem key={i.id} i={i} />)
        ) : (
          <p>Your cart looks empty. Start adding something</p>
        )}
      </div>

      <hr />

      <div className={styles.total}>
        <h1 className={styles.heading}>Total</h1>
        <h3 className={styles.price}>{formatCurrencyString({value: cartCtx.totalAmount, currency: "USD"})}</h3>
      </div>

      <button className={styles.checkout}>CHECKOUT</button>
    </div>
  );
}
