import { Link } from "react-router-dom";
const MovieList = ({ movies }) => {
  // base url for poster size image
  const posterPath = `https://image.tmdb.org/t/p/w185`;

  return (
    <div className="movieList">
      {movies?.map(({ id, poster_path, title, vote_average }) => {
        return (
          <div className="moviePoster" key={id}>
            <Link
              to={`/movie/${id}`}
              className="posterLink"
            >
              <img src={posterPath + poster_path} alt={title} />
              <div className="posterInfo">
                <p>{title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
