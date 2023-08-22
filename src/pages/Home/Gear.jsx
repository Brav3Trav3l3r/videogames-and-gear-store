import React from "react";
import styles from "./Gear.module.css";
import data from "../../data/gear.json";
import Card from "./Card";

export default function Gear() {
  return (
    <div className={styles.gear}>
      <h1 className={styles.heading}>NEW RELEASES!</h1>

      <div className={styles.cards}>
        {data.gear.map((g) => (
          <Card key={g.id} item={g} />
        ))}
      </div>
    </div>
  );
}
