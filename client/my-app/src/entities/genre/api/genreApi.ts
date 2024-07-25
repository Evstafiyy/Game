import type { AxiosResponse } from 'axios';
import type { Genre } from '../types/genreTypes';
import axiosInstance from '../../../services/axiosInstance';

class GenreApi {
  static getAllGenres = async (): Promise<Genre[]> => {
    const response: AxiosResponse<{ message: string; genres: Genre[] }> =
      await axiosInstance.get('/genres');
    return response.data.genres;
  };
}

export default GenreApi;
