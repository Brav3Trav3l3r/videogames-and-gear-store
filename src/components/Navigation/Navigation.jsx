import React from "react";
import Cart from "./Cart";
import styles from "./Navigation.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Navigation({ user = true }) {
  return (
    <nav className={styles.nav}>
      <Link to="/">GAME CUBE</Link>

      <div className={styles.interact}>
        {user ? <Cart /> : <button>Login</button>}
      </div>
    </nav>
  );
}
