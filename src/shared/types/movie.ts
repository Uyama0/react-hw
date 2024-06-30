export type TActor = {
  name: string;
  photo: string; // base64 img
};

export type IFullMovieInfo = {
  id: string;
  title: string;
  description: string;
  release_year: number;
  poster: string; //base64 img
  genre: string;
  rating: string; //float
  total_rates_count: string; //int
  actors: TActor[];
};
