import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  const posterPath = `https://image.tmdb.org/t/p/w185`;

  return (
    <div>
      {movies?.map(({ id, poster_path, title }) => {
        return (
          <Link
            to={`/movie/${id}`}
            key={id}
          >
            <img src={posterPath + poster_path} alt={title} />
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
