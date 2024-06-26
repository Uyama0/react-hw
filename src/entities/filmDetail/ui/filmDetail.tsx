import { FC } from "react";

import { IFullMovieInfo } from "shared/types";
import { StarRating } from "features/starRating";

import styles from "./styles.module.css";

interface IFilmDetail extends IFullMovieInfo {
  handleUpdate: () => void;
}

export const FilmDetail: FC<IFilmDetail> = ({
  id,
  poster,
  title,
  genre,
  release_year,
  rating,
  description,
  handleUpdate,
}) => {
  return (
    <article className={styles.film_wrapper}>
      <img className={styles.film_poster} src={poster} alt={title} />
      <div className={styles.film_info_container}>
        <div className={styles.film_info_header}>
          <h1 className={styles.film_info_title}>{title}</h1>
          <StarRating id={id} handleUpdate={handleUpdate} />
        </div>
        <div className={styles.film_info}>
          <div className={styles.film_info_row}>
            <span className={styles.film_info_attribute}>Жанр:</span>
            <span className={styles.film_info_details}>{genre}</span>
          </div>
          <div className={styles.film_info_row}>
            <span className={styles.film_info_attribute}>Год выпуска:</span>
            <span className={styles.film_info_details}>{release_year}</span>
          </div>
          <div className={styles.film_info_row}>
            <span className={styles.film_info_attribute}>Рейтинг:</span>
            <span className={styles.film_info_details}>{rating}</span>
          </div>
          {/* Need fix style broken and ugly */}
          <div
            className={styles.film_info_row}
            style={{ flexDirection: "column", gap: "16px" }}
          >
            <span className={styles.film_info_attribute}>Описание</span>
            <span
              className={styles.film_info_details}
              style={{ fontSize: "16px" }}
            >
              {description}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
