// business logic goes here
import { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Movies = () => {
  // state to store movies
  const [ movies, setMovies ] = useState(null);

  // state to handle page not found error
  const [ notFound, setNotFound ] = useState(false);

  const apiKey = "91bf6de032d334f6beb79054dab13a5f";
  const movieListUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  // function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(movieListUrl);
      const data = await response.json();
      //console.log(data);
      if (!response.ok) {
        setNotFound(true);
      } else {
        setMovies(data.results);
      }
    } catch (error) {
      console.log(error.response.status);
      setNotFound(true);
    }
  };

  useEffect(() => {
    fetchMovies();
    console.log(notFound);
  },[])

  useEffect(() => {
    console.log("movies:", movies);
  },[movies])

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
