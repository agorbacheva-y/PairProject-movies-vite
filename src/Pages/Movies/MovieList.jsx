import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  // base url for poster size image
  const posterPath = `https://image.tmdb.org/t/p/w185`;

  return (
    <div>
      {movies?.map(({ id, poster_path, title }) => {
        return (
          <Link
            key={id}
            to={`/movie/${id}`}
          >
            <img src={posterPath + poster_path} alt={title} />
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
