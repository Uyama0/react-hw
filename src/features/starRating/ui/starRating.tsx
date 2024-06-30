import { FC } from "react";

import { StarIcon } from "shared/assets/icons/starIcon";
import { useAppSelector } from "shared/lib/store";

import { useStarRating } from "../lib/useStarRating";

import styles from "./style.module.css";

interface IStarRating {
  id: string;
  disabled?: boolean;
}

export const StarRating: FC<IStarRating> = ({ id, disabled = false }) => {
  const { userRating, handleStarClick } = useStarRating(id, disabled);

  const isLogged = useAppSelector((state) => state.auth.isLogged);

  if (!isLogged) return null;

  return (
    <div className={styles.star_rating}>
      {[5, 4, 3, 2, 1].map((rating, index) => (
        <div
          key={index}
          className={`${styles.star} ${!disabled ? styles.star_onclick : ""}`}
          onClick={(e) => handleStarClick(e, rating)}
        >
          <StarIcon
            className={`${styles.star_icon} ${
              userRating >= rating ? styles.star_icon_active : ""
            }`}
            filled={userRating >= rating}
          />
          <span
            className={`${styles.star_rating_number} ${
              !disabled && userRating >= rating
                ? styles.star_rating_number_active
                : ""
            }`}
          >
            {rating}
          </span>
        </div>
      ))}
    </div>
  );
};
