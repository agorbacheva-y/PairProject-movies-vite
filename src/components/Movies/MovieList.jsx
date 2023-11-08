import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  const posterPath = `https://image.tmdb.org/t/p/w185`;

  return (
    <div>
      {movies?.map(({ title, id, poster_path }) => {
        return (
          <Link
            to={`/movie/${title.toLowerCase().replace(/ /g, "%20")}`}
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
