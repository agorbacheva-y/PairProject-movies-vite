// fetch movie details
// useParams - we use movieId to get a unique id for the movie we need to fetch

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Movies.css";

const MovieInfo = () => {
  // use movie id as params
  const { movieId } = useParams();

  // useNavigate hook to go back one pg
  const navigate = useNavigate();

  // state to store movie details 
  const [ movieDetails, setMovieDetails ] = useState();

  // base url for backdrop size image
  const backdropPath = "https://image.tmdb.org/t/p/w1280";
  // src url for backdrop img is {backdropPath + movies.backdrop_path}

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
      console.log(error.response.status)
    }
  };

  // call function when component mounts
  useEffect(() => {
    fetchMovieDetails();
  },[]);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backdropPath}${movieDetails?.backdrop_path})`
      }}

    >
      <button onClick={() => navigate(-1)}>Home</button>
      <div className="movieInfo">
        <div className="movieTitle">
          {movieDetails?.title}
        </div>
        <div className="movieRating">
          {movieDetails?.vote_average}
        </div>
        <div className="movieOverview">
          {movieDetails?.overview}
        </div>
      </div>
      
    </div>
  );
};

export default MovieInfo;
