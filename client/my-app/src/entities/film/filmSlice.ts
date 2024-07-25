import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Film, FilmId } from './types/filmType';
import FilmApi from './api/filmApi';

type FilmState = {
  films: Film[];
  errors: string | undefined;
  isLoading: boolean;
};

const initialState: FilmState = {
  films: [],
  errors: undefined,
  isLoading: false,
};

export const getAllFilm = createAsyncThunk('load/film', () => FilmApi.getAllFilm());
export const addFilm = createAsyncThunk(
  'add/film',
  (data: { title: string; year: number; director: string }) => FilmApi.addFilm(data),
);

export const removeFilm = createAsyncThunk('remove/film', (id: FilmId) => FilmApi.removeFilm(id));

export const updateFilm = createAsyncThunk(
  'update/film',
  (data: { id: number; title: string; year: number; director: string }) => FilmApi.updateFilm(data),
);

export const filmSlice = createSlice({
  name: 'films',
  initialState, // тут значение state, они одинаковы
  reducers: {},
  extraReducers: (builder) => {
    builder
      // если успешно
      .addCase(getAllFilm.fulfilled, (state, action) => {
        state.films = action.payload;
      }) // если плохо
      .addCase(getAllFilm.rejected, (state, action) => {
        state.errors = action.error.message;
      }) // если грузится
      .addCase(getAllFilm.pending, (state) => {
        state.isLoading = true;
      }) // если успешно
      .addCase(addFilm.fulfilled, (state, action) => {
        state.films.push(action.payload);
      }) // если плохо
      .addCase(addFilm.rejected, (state, action) => {
        state.errors = action.error.message;
      }) // если грузится
      .addCase(addFilm.pending, (state) => {
        state.isLoading = true;
      }) // если успешно
      .addCase(removeFilm.fulfilled, (state, action) => {
        state.films = state.films.filter((film) => film.id !== action.payload);
      }) // если плохо
      .addCase(removeFilm.rejected, (state, action) => {
        state.errors = action.error.message;
      }) // если грузится
      .addCase(removeFilm.pending, (state) => {
        state.isLoading = true;
      })
      // если успешно
      .addCase(updateFilm.fulfilled, (state, action) => {
        state.films = state.films.map((film) => film.id === action.payload.id ? action.payload : film);
      }) // если плохо
      .addCase(updateFilm.rejected, (state, action) => {
        state.errors = action.error.message;
      }) // если грузится
      .addCase(updateFilm.pending, (state) => {
        state.isLoading = true;
      });
  },
});
