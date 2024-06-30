import { FC, useState } from "react";

import { StarIcon } from "shared/assets/icons/starIcon";
import { useAppSelector } from "shared/lib/store";

import { useStarRating } from "../lib/useStarRating";

import styles from "./style.module.css";

interface IStarRating {
  id: string;
  disabled?: boolean;
  handleUpdate?: () => void;
}

export const StarRating: FC<IStarRating> = ({
  id,
  disabled = false,
  handleUpdate,
}) => {
  const { userRating, handleStarClick } = useStarRating(id, disabled);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isLogged = useAppSelector((state) => state.auth.isLogged);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    rating: number
  ) => {
    handleStarClick(e, rating);
    if (handleUpdate) {
      handleUpdate();
    }
  };

  const handleStarMouseEnter = (index: number) => {
    if (!disabled) {
      setHoveredIndex(index);
    }
  };

  const handleStarMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (!isLogged) return null;

  return (
    <div className={styles.star_rating}>
      {[5, 4, 3, 2, 1].map((rating, index) => (
        <div
          key={index}
          className={`${styles.star} ${!disabled ? styles.star_onclick : ""}`}
          onClick={(e) => handleClick(e, rating)}
          onMouseEnter={() => handleStarMouseEnter(index)}
          onMouseLeave={handleStarMouseLeave}
        >
          <StarIcon
            className={`${styles.star_icon} ${
              userRating >= rating ||
              (hoveredIndex !== null && index >= hoveredIndex)
                ? styles.star_icon_hovered
                : ""
            }`}
            filled={
              userRating >= rating ||
              (hoveredIndex !== null && index >= hoveredIndex)
            }
            hovered={hoveredIndex !== null && index >= hoveredIndex}
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
