import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Film } from '../types/filmType';
import { useAppDispatch } from '../../../app/providers/store/store';
import { updateFilm } from '../filmSlice';

const schemaFilm = yup
  .object()
  .shape({
    title: yup.string().required('заполните все поля'),
    year: yup.number().required('заполните все поля'),
    director: yup.string().required('заполните все поля'),
  })
  .required();

type FormUpdateFilmProps = {
  film: Film;
};

function FormUpdateFilm({ film }: FormUpdateFilmProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: film.title,
      year: film.year,
      director: film.director,
    },
    resolver: yupResolver(schemaFilm), // yup, joi and even your own.
  });

  const onSubmit = (data: { title: string; year: number; director: string }): void => {
    void dispatch(updateFilm({ ...data, id: film.id }));
    reset();
  };
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <label htmlFor="title">
        title
        <input type="text" {...register('title')} />
        <span>{errors.title?.message} </span>
      </label>
      <label htmlFor="year">
        year
        <input type="number" {...register('year')} defaultValue={0} />
        <span>{errors.year?.message} </span>
      </label>
      <label htmlFor="director">
        director
        <input type="text" {...register('director')} />
        <span>{errors.director?.message} </span>
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default FormUpdateFilm;
