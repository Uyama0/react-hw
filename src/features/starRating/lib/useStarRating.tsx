import { useState, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "shared/lib/store";
import { useRateMovieMutation } from "shared/api/apiSlice";
import { setRating } from "../model/slice";
import { useDebounce } from "shared/lib/debounce";

export const useStarRating = (id: string, active = false) => {
  const userRating = useAppSelector((state) => state.ratings[id]);
  const token = useAppSelector((state) => state.auth.token);
  const [curRating, setCurRating] = useState(userRating);
  const [rateMovie] = useRateMovieMutation();
  const dispatch = useAppDispatch();

  const { debouncedFunction } = useDebounce(async (rating: number) => {
    await rateMovie({
      movieId: id,
      user_rate: rating,
      token: token,
    }).unwrap();
  }, 700);

  const handleStarClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, rating: number) => {
      e.preventDefault();
      e.stopPropagation();

      if (rating !== curRating) {
        dispatch(setRating({ id, rating }));
        setCurRating(rating);
        debouncedFunction(rating);
      }
    },
    [curRating, debouncedFunction]
  );

  return {
    userRating,
    handleStarClick,
    active,
  };
};
