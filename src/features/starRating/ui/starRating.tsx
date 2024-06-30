import { FC } from "react";

import { StarIcon } from "shared/assets/icons/starIcon";
import { useAppSelector } from "shared/lib/store";

import { useStarRating } from "../lib/useStarRating";

import styles from "./style.module.css";

interface IStarRating {
  id: string;
  disabled?: boolean;
  handleUpdate: () => void;
}

export const StarRating: FC<IStarRating> = ({
  id,
  disabled = false,
  handleUpdate,
}) => {
  const { userRating, handleStarClick } = useStarRating(id, disabled);

  const isLogged = useAppSelector((state) => state.auth.isLogged);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    rating: number
  ) => {
    handleStarClick(e, rating);
    handleUpdate();
  };

  if (!isLogged) return null;

  return (
    <div className={styles.star_rating}>
      {[5, 4, 3, 2, 1].map((rating, index) => (
        <div
          key={index}
          className={`${styles.star} ${!disabled ? styles.star_onclick : ""}`}
          onClick={(e) => handleClick(e, rating)}
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
