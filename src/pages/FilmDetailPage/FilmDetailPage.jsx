import { NavLink, useParams } from "react-router-dom";
import "./FilmDetailPage.css";
import { useFilmById } from "../../hooks/useFilmByID";

export const FilmDetailPage = () => {
  const { id } = useParams();
  const { data: film, isLoading, error } = useFilmById(id);
  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div className="detailCard">
      <img src={film.movie_banner} className="detailCard_banner" alt="" />
      <h2 className="card_title">
        {film.title} ({film.original_title}), {film.release_date}
      </h2>
      <strong className="detailCard_director">
        Directed by: {film.director}
      </strong>
      <h3>
        Duration time: {Math.floor(film.running_time / 60)} Hour{" "}
        {film.running_time % 60} minutes
      </h3>
      <h3>Rating: {film.rt_score}/100</h3>
      <p className="detailCard_description">{film.description}</p>
      <NavLink className="detailCard_back" to={-1}>
        Back
      </NavLink>
    </div>
  );
};
