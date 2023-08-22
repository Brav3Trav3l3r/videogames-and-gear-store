import React, { useCallback, useEffect, useState } from "react";
import styles from "./Gear.module.css";
import Card from "./Card";
import client from "../../client";

export default function Gear() {
  const [gears, setGears] = useState([]);

  const fetchGears = useCallback(async () => {
    const res = await client.fetch(
      '*[_type == "gears"]{"id": _id, title, price, "poster": poster.asset->url } '
    );

    setGears(res);
  }, []);

  useEffect(() => {
    fetchGears();
  }, [fetchGears]);

  return (
    <div className={styles.gear}>
      <h1 className={styles.heading}>NEW GEARS!</h1>

      <div className={styles.cards}>
        {gears.map((g) => (
          <Card item={g} key={g.id} />
        ))}
      </div>
    </div>
  );
}
