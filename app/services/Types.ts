export interface ActionType {
  type: string;
  data: string;
}
export interface DataTypes {
  listFetching: boolean;
  listError: string | boolean;
  listData: MovieDataType[];
}
export interface PayloadType {
  data: MovieDataType[];
  error: string;
}
export interface ResponseType {
  config: object;
  data: { results: object[] };
  duration: number;
  headers: object;
  ok: boolean;
  originalError: null | string;
  problem: null | string;
  status: number;
}
export interface MovieDataType {
  adult: number;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
