import { Sidebar } from "widgets/sidebar";
import { FilmsList } from "widgets/filmsList/ui/filmsList";
import { Search } from "features/search";

import styles from "./styles.module.css";

export const Films = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <section className={styles.films_list_container}>
        <Search />
        <FilmsList />
      </section>
    </main>
  );
};
