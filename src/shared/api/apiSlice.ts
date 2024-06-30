import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "shared/consts";
import { ISearchFilms } from "shared/types";
import { TFullMovieInfo } from "shared/types";
import { TLoginData } from "shared/types";
import { TLoginToken } from "shared/types";

export const cinemaApi = createApi({
  reducerPath: "cinemaApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFilms: builder.query<ISearchFilms, string>({
      query: (params) => `/api/v1/search?${params}`,
    }),
    getFilm: builder.query<TFullMovieInfo, string>({
      query: (id) => `/api/v1/movie/${id}`,
    }),
    login: builder.query<TLoginToken, TLoginData>({
      query: ({ username, password }) => ({
        url: "/api/v1/login",
        method: "POST",
        body: { username, password },
      }),
    }),
    rateMovie: builder.mutation({
      query: ({ movieId, user_rate, token }) => {
        return {
          url: "/api/v1/rateMovie",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: { movieId, user_rate },
        };
      },
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useLazyGetFilmQuery,
  useGetFilmQuery,
  useLazyLoginQuery,
  useRateMovieMutation,
} = cinemaApi;
