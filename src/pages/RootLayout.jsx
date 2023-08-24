import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { CartContextProvider } from "../store/cart-context";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../../lib/stripe/getStripe";

export default function RootLayout() {
  return (
    <div>
      <CartProvider
        mode="checkout-session"
        stripe={getStripe()}
        currency={"usd"}
      >
        <CartContextProvider>
          <Navigation />
          <Outlet />
        </CartContextProvider>
      </CartProvider>
    </div>
  );
}
