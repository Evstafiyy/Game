import type { type AxiosResponse } from 'axios';
import axiosInstance from '../../../services/axiosInstance';
import type { Film, FilmId } from '../types/filmType';

class FilmApi {
  static getAllFilm = async (): Promise<Film[]> => {
    try {
      const response: AxiosResponse<{ message: string; movies: Film[] }> =
        await axiosInstance.get('/movies');
      return response.data.movies;
    } catch (error) {
       // const axiosError = error as AxiosError;
      // if (axiosError.response) {
      //   switch (axiosError.response.status) {
      //     case 400:
      //       throw new Error(`Bad request:${axiosError.response.data}`);
      //     case 401:
      //       throw new Error(`Нет прав:${axiosError.response.data}`);
      //     default:
      //       break;
      //   }
      // }
    }
  };

  static removeFilm = async (id: FilmId): Promise<FilmId> => {
    const response: AxiosResponse<{ message: string }> = await axiosInstance.delete(
      `/movies/${id}`,
    );
    // if (Response.data.message === 'success')
    return id;
  };

  static addFilm = async (data: {
    title: string;
    year: number;
    director: string;
  }): Promise<Film> => {
    const response: AxiosResponse<{ message: string; movie: Film }> = await axiosInstance.post(
      '/movies',
      data,
    );
    return response.data.movie;
  };

  static updateFilm = async (data: {
    id: number;
    title: string;
    year: number;
    director: string;
  }): Promise<Film> => {
    const response = await axiosInstance.put(`/movies/${data.id}`, data);
    return response.data.movie;
  };
}

export default FilmApi;
