// .map movies and add Link to images that will take user to MovieInfo.jsx

const MovieList = ({ movies }) => {
  const posterPath = `https://image.tmdb.org/t/p/w185`;
  
  return (
    <div>
      {movies?.map((movie) => {
        return (
          <img src={posterPath + movie.poster_path} />
        )
      })}
    </div>
  );
};

export default MovieList;
