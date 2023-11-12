import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { GenreTags } from "../../components/GenreTags";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const Genre = () => {
  const { genreId } = useParams();

  // state to store movies
  const [ movies, setMovies ] = useState(null);

  // state to store loading state
  const [ isLoading, setIsLoading ] = useState(true);

  const apiKey = "91bf6de032d334f6beb79054dab13a5f";

  // function to fetch movies
  const fetchMovies = async () => {
    const movieListUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}&api_key=${apiKey}`;
 
    try {
      const response = await fetch(movieListUrl);
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  useEffect(() => {
    fetchMovies();
  },[genreId])

  useEffect(() => {
    console.log("movies:", movies);
  },[movies])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <GenreTags />
          <MovieList movies={movies} />
        </div>
      )}
    </>
  );
};

export default Genre;
