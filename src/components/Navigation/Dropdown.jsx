import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

export default function Dropdown() {
  const { cartDetails, cartCount, formattedTotalPrice, redirectToCheckout } =
    useShoppingCart();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4242/checkout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    });

    const resData = await response.json();

    console.log(resData.sessionId);

    redirectToCheckout({ sessionId: resData.sessionId })
  }

  return (
    <div className={styles.dropdown}>
      <h1 className={styles.heading}>Cart</h1>

      <div className={styles.items}>
        {cartCount ? (
          Object.keys(cartDetails).map((sku, index) => {
            return <CartItem key={sku} item={cartDetails[sku]} />;
          })
        ) : (
          <p>Your cart looks empty. Start adding something</p>
        )}
      </div>

      <hr />

      <div className={styles.total}>
        <h1 className={styles.heading}>Total</h1>
        <h3 className={styles.price}>{formattedTotalPrice}</h3>
      </div>

      <button className={styles.checkout} onClick={handleSubmit}>
        CHECKOUT
      </button>
    </div>
  );
}
