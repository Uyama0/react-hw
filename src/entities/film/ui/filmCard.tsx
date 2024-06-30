import { FC } from "react";
import { Link } from "react-router-dom";

import { StarRating } from "features/starRating";
import { TFullMovieInfo } from "shared/types";

import styles from "./styles.module.css";

export const FilmCard: FC<TFullMovieInfo> = ({
  id,
  title,
  description,
  poster,
  release_year,
  genre,
}) => {
  return (
    <Link to={`/films/${id}`} className={styles.film}>
      <img className={styles.film_poster} src={poster} alt={title} />
      <div className={styles.film_details_wrapper}>
        <h1 className={styles.film_title}>{title}</h1>
        <div className={styles.film_details_container}>
          <div className={styles.film_details}>
            <span className={styles.film_details_descrition}>Жанр</span>
            <span className={styles.film_details_descrition}>Год выпуска</span>
            <span className={styles.film_details_descrition}>Описание</span>
          </div>
          <div className={styles.film_details}>
            <span className={styles.film_details_info}>{genre}</span>
            <span className={styles.film_details_info}>{release_year}</span>
            <span className={styles.film_details_info}>{description}</span>
          </div>
        </div>
      </div>
      <div>
        <StarRating id={id} />
      </div>
    </Link>
  );
};
