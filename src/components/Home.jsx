// business logic goes here
import { useState, useEffect } from "react";
import MovieList from "./movies/MovieList";

const Home = () => {
  // state to store list of movies
  const [ movies, setMovies ] = useState(null);

  // api call + key
  const apiKey = "91bf6de032d334f6beb79054dab13a5f";
  const movieListUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  // function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(movieListUrl);
      const data = await response.json();
      //console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  // call function when component mounts
  useEffect(() => {
    fetchMovies();
  },[])

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
