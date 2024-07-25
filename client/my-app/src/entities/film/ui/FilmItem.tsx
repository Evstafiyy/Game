import React, { useState } from 'react';
import type { Film } from '../types/filmType';
import FilmApi from '../api/filmApi';
import FormUpdateFilm from './FormUpdateFilm';
import { useAppDispatch } from '../../../app/providers/store/store';
import { removeFilm } from '../filmSlice';

type FilmItemProps = {
  film: Film;
};

function FilmItem({ film }: FilmItemProps): JSX.Element {
const dispatch = useAppDispatch()

const [active, setActive] = useState(false)

  const onHandleDelete = (): void => {
    void dispatch(removeFilm(film.id))
  };


  return (
    <div className="FilmItem">
      <h1>{film.title}</h1>
      <p>{film.director}</p>
      <p>{film.year}</p>
      <button onClick={onHandleDelete} type="button">
        delete
      </button>
      <button type='button' onClick={()=>setActive((prev)=>!prev)}> update</button>
      {active && <FormUpdateFilm film={film}/>}
    </div>
  );
}

export default FilmItem;
