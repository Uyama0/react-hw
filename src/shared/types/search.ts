import { GENRES_MAP } from "shared/consts";
import { TFullMovieInfo } from "./movie";

type GenresEnglish = keyof typeof GENRES_MAP;

export interface IGetFilms {
  title?: string;
  genre?: GenresEnglish;
  release_year?: string;
  sort_by?: "release_year" | "title" | "rating";
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
}

export interface ISearchFilms {
  search_result: TFullMovieInfo[];
  total_pages: number;
}
