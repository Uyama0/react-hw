import { FC } from "react";

import { Actor } from "entities/actor";
import { ArrowIcon } from "shared/assets/icons/ArrowIcon";
import { TActor } from "shared/types";
import { useCarousel } from "../lib/useCarousel";

import styles from "./styles.module.css";

export const ActorsList: FC<{ actors: TActor[] }> = ({ actors }) => {
  const {
    containerRef,
    showPrevButton,
    showNextButton,
    nextSlide,
    prevSlide,
    updateButtonsVisibility,
  } = useCarousel();

  return (
    <div className={styles.carousel}>
      <h1 className={styles.actor_list_title}>Актеры</h1>
      {showPrevButton && (
        <button className={styles.prevButton} onClick={prevSlide}>
          <ArrowIcon rotated={true} />
        </button>
      )}
      <div
        className={styles.actor_list}
        ref={containerRef}
        onScroll={updateButtonsVisibility}
      >
        {actors.concat(actors).map((actor, index) => (
          <div key={index} className={styles.actor_container}>
            <Actor {...actor} />
          </div>
        ))}
      </div>
      {showNextButton && (
        <button className={styles.nextButton} onClick={nextSlide}>
          <ArrowIcon />
        </button>
      )}
    </div>
  );
};
