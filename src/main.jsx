import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "use-shopping-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
    successUrl="stripe.com"
    cancelUrl="twitter.com/dayhaysoos"
    currency="USD"
    allowedCountries={["US", "GB", "CA"]}
    billingAddressCollection={true}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);
