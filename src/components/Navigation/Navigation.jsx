import React from "react";
import Cart from "./Cart";
import styles from "./Navigation.module.css";
import { Icon } from "@iconify/react";

export default function Navigation({ user = true }) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.heading}>GAME CUBE</h1>

      <div className={styles.interact}>
        <Icon icon="lucide:search" />
        {user ? <Cart /> : <button>Login</button>}
      </div>
    </nav>
  );
}
