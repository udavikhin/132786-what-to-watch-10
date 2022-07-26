import {Film} from '../../types/film';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux';
import {SIMILAR_FILMS_LIMIT} from '../../const';
import FilmCardSmall from '../film-card/components/film-card-small/film-card-small';
import {getFilmsToDisplay} from '../../store/films-process/selectors';

type FilmListProps = {
  filmsData: Film[]
}

function FilmList({filmsData}: FilmListProps): JSX.Element {
  const {id} = useParams();
  const filmsToDisplay = useAppSelector(getFilmsToDisplay);

  let filmsOutput = filmsData;

  if (id) {
    filmsOutput = filmsOutput.filter((film) => film.id !== Number(id));
    filmsOutput = filmsOutput.slice(0, SIMILAR_FILMS_LIMIT);
  }

  if (!id) {
    filmsOutput = filmsOutput.slice(0, filmsToDisplay);
  }

  return (
    <div className="catalog__films-list">
      {filmsOutput.map((film) => (
        <FilmCardSmall
          key={film.id}
          film={film}
        />))}
    </div>
  );
}

export default FilmList;
