import React, { useCallback, useEffect, useState } from "react";
import styles from "./Games.module.css";
import Card from "./Card";
import client from "../../client";

export default function Games() {
  const [games, setGames] = useState([]);

  const fetchGames = useCallback(async () => {
    const res = await client.fetch(
      '*[_type == "games"]{title, "id": _id, price, "poster": poster.asset->url }'
    );
    setGames(res);
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <div className={styles.games}>
      <h1 className={styles.heading}>NEW RELEASES!</h1>

      <div className={styles.cards}>
        {games?.map((g) => (
          <Card key={g.id} item={g} />
        ))}
      </div>
    </div>
  );
}
