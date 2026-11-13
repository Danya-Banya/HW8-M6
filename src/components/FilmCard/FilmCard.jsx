import { NavLink } from "react-router-dom";
import "./FilmCard.css";
export const FilmCard = (props) => {
  const { id, image, title, original_title, description, release_date, director } = props;
  return (
    <NavLink to={`/films/${id}`}>
      <div className="card">
        <img className="card_img" src={image} alt={title} />
        <h2 className="card_title">{title} {release_date}</h2>
        <h3 className="card_title">{original_title}</h3>
        <p className="card_description">{description}</p>
      </div>
    </NavLink>
  );
};
