import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import Games from "./Games";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Games />
      </main>
    </div>
  );
}
