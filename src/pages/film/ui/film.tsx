import { useParams } from "react-router-dom";

import { FilmDetail } from "entities/filmDetail";
import { useGetFilmQuery } from "shared/api/apiSlice";

import styles from "./styles.module.css";
import { ActorsList } from "widgets/actorsList/ui/actorsList";

export const Film = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFilmQuery(id);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <main className={styles.page_wrapper}>
      <FilmDetail {...data} />
      <ActorsList actors={data.actors} />
    </main>
  );
};
