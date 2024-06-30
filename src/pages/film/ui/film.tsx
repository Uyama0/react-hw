import { useParams } from "react-router-dom";

import { ActorsList } from "widgets/actorsList/ui/actorsList";
import { FilmDetail } from "entities/filmDetail";
import { useGetFilmQuery } from "shared/api/apiSlice";
import { LoaderIcon } from "shared/assets/icons/loaderIcon";

import styles from "./styles.module.css";

export const Film = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, refetch } = useGetFilmQuery(id!);

  const handleUpdate = () => {
    refetch();
  };

  if (isLoading)
    return (
      <div className={styles.loading_container}>
        <LoaderIcon />
      </div>
    );

  if (!data) return <div>No data</div>;

  return (
    <main className={styles.page_wrapper}>
      <FilmDetail {...data} handleUpdate={handleUpdate} />
      <ActorsList actors={data.actors} />
    </main>
  );
};
