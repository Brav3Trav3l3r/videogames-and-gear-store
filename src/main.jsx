import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "use-shopping-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider
    cartMode="checkout-session"
    stripe={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
    successUrl="http://127.0.0.1:5173/"
    cancelUrl="http://127.0.0.1:5173/"
    currency="USD"
    allowedCountries={["US", "GB", "CA"]}
    billingAddressCollection={true}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
