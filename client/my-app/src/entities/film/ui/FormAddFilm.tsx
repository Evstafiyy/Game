import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/providers/store/store';
import { addFilm } from '../filmSlice';


const schemaFilm = yup
  .object()
  .shape({
    title: yup.string().required('заполните все поля'),
    year: yup.number().required('заполните все поля'),
    director: yup.string().required('заполните все поля'),
  })
  .required();

function FormAddFilm(): JSX.Element {
const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFilm), // yup, joi and even your own.
  });

  const onSubmit = (film: { title: string; year: number; director: string }): void => {
    void dispatch(addFilm(film))
      reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    style={{display: "flex",flexDirection: "column", alignItems: "center"}}
    >
      <label htmlFor="title">
        title
        <input type="text" {...register('title')} defaultValue={null}/>
        <span>{errors.title?.message} </span>
      </label>
      <label htmlFor="year">
        year
        <input type="number" {...register('year')} defaultValue={null}/>
        <span>{errors.year?.message} </span>
      </label>
      <label htmlFor="director">
        director
        <input type="text" {...register('director')} defaultValue={null}/>
        <span>{errors.director?.message} </span>
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}

export default FormAddFilm;
