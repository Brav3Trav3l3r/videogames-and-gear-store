import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "use-shopping-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe="pk_test_51NisCpEfwkwOpSa4ftyRroZmIotifhyVXCnRHjiLWgZwEl35g6dCnXqKxAtJJIJzNnhido0Zl2PLCnJHn2FI6pZ600FtbqNDDx"
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    billingAddressCollection={true}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
