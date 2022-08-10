import {Film} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
    film: Film,
    onMouseOverHandler: React.MouseEventHandler
}

function FilmCard({film, onMouseOverHandler}: FilmCardProps): JSX.Element {
  return (
    <article onMouseOver={onMouseOverHandler} className="small-film-card catalog__films-card">
      <VideoPlayer noSound film={film} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
