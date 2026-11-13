import "./FilmsPage.css";
import { FilmCard } from "../../components/FilmCard";
import { useFilms } from "../../hooks/useFilms";
import { Loader } from "../../components/Loader";
export const FilmsPage = () => {
  const { data: films, isLoading, error } = useFilms();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  if (!films) {
    return <p>Фильмы не найдены</p>;
  }
  return (
    <>
      <h2 className="title">Films</h2>
      <section className="wrapper">
        {films.map((film) => (
          <FilmCard {...film} key={film.title} />
        ))}
      </section>
    </>
  );
};
