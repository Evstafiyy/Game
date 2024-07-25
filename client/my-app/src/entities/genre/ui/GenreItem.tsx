import React from 'react';
import type { Genre } from '../types/genreTypes';
import FilmItem from '../../film/ui/FilmItem';

type GenreItemProps = {
  genre: Genre;
};

function GenreItem({ genre }: GenreItemProps): JSX.Element {
  return (
    <div>
      <h1>{genre.title}</h1>
      <img src={genre.img} alt="картинка" />
      <div style={{ display: 'flex' }}>
        {genre.Movies.map((film) => (
          <FilmItem film={film} key={film.id} />
        ))}
      </div>
    </div>
  );
}

export default GenreItem;
