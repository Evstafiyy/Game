import React from 'react';
import { useSelector } from 'react-redux';
import FilmItem from '../../entities/film/ui/FilmItem';
import FormAddFilm from '../../entities/film/ui/FormAddFilm';
import type { RootState } from '../../app/providers/store/store';


function FilmsPage(): JSX.Element {
  const {films, errors, isLoading} = useSelector((store: RootState)=> store.film)

  
  return (
    <div className="FilmsPage">
      <FormAddFilm />
      {films && films.map((film) => <FilmItem film={film} key={film.id} />)}
      <span>{errors}</span>
    </div>
  );
}

export default FilmsPage;
