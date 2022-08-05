import FilmCard from '../film-card/film-card';
import { Film } from '../../types/film';
import {useState} from 'react';

type FilmListProps = {
    filmsData: Film[]
}

function FilmList({filmsData}: FilmListProps): JSX.Element {
  const [/*activeFilm*/, setActiveFilm] = useState<Film | null>(null);
  return (
    <>
      {filmsData.map((film) => (
        <FilmCard
          onMouseOverHandler={() => setActiveFilm(film)}
          key={film.id}
          film={film}
        />))}
    </>
  );
}

export default FilmList;