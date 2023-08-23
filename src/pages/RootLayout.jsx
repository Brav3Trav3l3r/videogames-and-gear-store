import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { CartProvider } from "../store/cart-context";

export default function RootLayout() {
  return (
    <div>
      <CartProvider>
        <Navigation />
        <Outlet />
      </CartProvider>
    </div>
  );
}
