import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import Games from "./Games";
import Gear from "./Gear";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Games />
        <Gear />
      </main>
    </div>
  );
}
