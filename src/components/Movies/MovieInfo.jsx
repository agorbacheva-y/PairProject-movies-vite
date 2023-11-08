import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  const { movieId } = useParams();
  
  const [ movieDetails, setMovieDetails ] = useState(null);

  // const backdropPath = "https://image.tmdb.org/t/p/w1280";
  // src url for backdrop img is {backdropPath + movies.backdrop_path}
  
  const apiKey = "91bf6de032d334f6beb79054dab13a5f";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(movieDetailUrl);
      const data = await response.json();
      //console.log(data);
      setMovieDetails(data);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  },[]);

  return (
    <div>
      movie details - id
    </div>
  );
};

export default MovieInfo;
