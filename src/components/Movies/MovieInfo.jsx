import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  // params is the movie id
  const { movieId } = useParams();
  
  // state to store movie details
  const [ movieDetails, setMovieDetails ] = useState(null);

  // base url for backdrop size image
  const backdropPath = "https://image.tmdb.org/t/p/w1280";
  
  // api call + key
  const apiKey = "91bf6de032d334f6beb79054dab13a5f";
  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  // function to fetch movie details
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(movieDetailUrl);
      const data = await response.json();
      console.log(data);
      setMovieDetails(data);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  // call function when component mounts
  useEffect(() => {
    fetchMovieDetails();
  },[]);

  return (
    <div>
      <img src={backdropPath + movieDetails?.backdrop_path} />
    </div>
  );
};

export default MovieInfo;