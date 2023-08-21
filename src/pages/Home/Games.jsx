import React from "react";
import styles from "./Games.module.css";
import data from "../../data/games.json";
import Card from "./Card";

export default function Games() {
  return (
    <div className={styles.games}>
      <h1 className={styles.heading}>NEW RELEASES!</h1>

      <div className={styles.cards}>
        {data.games.map((g) => (
          <Card key={g.id} game={g} />
        ))}
      </div>
    </div>
  );
}
