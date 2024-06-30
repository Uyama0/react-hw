import { useEffect } from "react";

import { FilmCard } from "entities/film/ui/filmCard";
import { useGetFilmsQuery } from "shared/api/apiSlice";
import { useAppSelector } from "shared/lib/store";
import { Pagination } from "features/pagination/";
import { LoaderIcon } from "shared/assets/icons/loaderIcon";

import styles from "./styles.module.css";

export const FilmsList = () => {
  const queryParams = useAppSelector((data) => data.searchParams.searchParams);
  const { data, isLoading, refetch } = useGetFilmsQuery(queryParams || "");

  useEffect(() => {
    refetch();
  }, [queryParams]);

  if (isLoading)
    return (
      <section className={styles.loader_container}>
        <LoaderIcon />
      </section>
    );

  if (!data || !data.search_result || data.search_result.length === 0)
    return (
      <section className={styles.empty_container}>
        <h1>Фильмы не найдены</h1>
        <p>Измените запрос и попробуйте снова</p>
      </section>
    );

  return (
    <section className={styles.films_list_container}>
      {data &&
        data.search_result.map((film) => <FilmCard key={film.id} {...film} />)}
      <Pagination data={data} />
    </section>
  );
};
