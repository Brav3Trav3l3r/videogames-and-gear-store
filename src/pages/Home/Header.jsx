import React from "react";
import { Icon } from "@iconify/react";

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <img
          // src="https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src="/plague-tale.png"
          alt=""
        />
      </div>

      <div className={styles.action}>
        <div className={styles.icon}>
          <Icon icon="fxemoji:bolt" />
        </div>
        <h2>Flash Sale</h2>
      </div>
    </header>
  );
}
