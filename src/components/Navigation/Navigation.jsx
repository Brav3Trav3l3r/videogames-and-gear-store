import React from "react";
import Cart from "./Cart";
import styles from "./Navigation.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Navigation({ user = true }) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link to="/">
          <Icon icon="skill-icons:vite-dark" />
          <Icon icon="devicon:react" />
          <Icon icon="devicon:sanity" />
          <Icon icon="logos:stripe" />
        </Link>

        <div className={styles.interact}>
          {user ? <Cart /> : <button>Login</button>}
        </div>
      </nav>
    </div>
  );
}
