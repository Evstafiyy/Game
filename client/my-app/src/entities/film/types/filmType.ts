import type { GenreId } from "../../genre/types/genreTypes";

export type Film = {
  id: number;
  title: string;
  year: number;
  director: string;
  genreId: GenreId; 
};

export type FilmWithoutId = Omit<Film, "id">

export type FilmId = Film['id'];

