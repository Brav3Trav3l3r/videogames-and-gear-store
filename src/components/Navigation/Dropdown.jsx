import React, { useContext } from "react";
import styles from "./Dropdown.module.css";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";
import { redirect, useNavigate } from "react-router-dom";

export default function Dropdown() {
  const { cartDetails, cartCount, formattedTotalPrice, redirectToCheckout } =
    useShoppingCart();

    const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4242/checkout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    console.log(response.url);
    window.location = response.url

    // redirectToCheckout({ sessionId: response.id });
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
