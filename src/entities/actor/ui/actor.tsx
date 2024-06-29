import { FC } from "react";

import { TActor } from "shared/types";

import styles from "./styles.module.css";

export const Actor: FC<TActor> = ({ name, photo }) => {
  return (
    <div className={styles.actor_container}>
      <img src={photo} alt={name} className={styles.actor_photo} />
      <h1>{name}</h1>
    </div>
  );
};
