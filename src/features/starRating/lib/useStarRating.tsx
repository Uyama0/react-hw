import { useState, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "shared/lib/store";
import { useRateMovieMutation } from "shared/api/apiSlice";
import { setRating } from "../model/slice";

export const useStarRating = (id: string, active = false) => {
  const userRating = useAppSelector((state) => state.ratings[id]);
  const token = useAppSelector((state) => state.auth.token);
  const [curRating, setCurRating] = useState(userRating);
  const [rateMovie] = useRateMovieMutation();
  const dispatch = useAppDispatch();

  const handleStarClick = useCallback(
    async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, rating: number) => {
      e.preventDefault();
      e.stopPropagation();

      if (rating !== curRating) {
        await rateMovie({
          movieId: id,
          user_rate: rating,
          token: token,
        }).unwrap();
        dispatch(setRating({ id, rating }));
        setCurRating(rating);
      }
    },
    [curRating, id, token, dispatch, setCurRating]
  );

  return {
    userRating,
    handleStarClick,
    active,
  };
};
