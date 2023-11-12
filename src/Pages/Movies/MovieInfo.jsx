import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import NavBar from "../../components/NavBar";
import "./Movies.css";

const MovieInfo = () => {
  // use movie id as params
  const { movieId } = useParams();

  // state to store movie details 
  const [ movieDetails, setMovieDetails ] = useState(null);

  // state to handle page not found error
  const [ notFound, setNotFound ] = useState(false);

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

      if (!response.ok) {
        setNotFound(true);
      } else {
        setMovieDetails(data);
      }
    } catch (error) {
      console.log(error.response.status)
    }
  };

  // call function when component mounts
  useEffect(() => {
    fetchMovieDetails();
  },[]);

  return (
    <>
      {notFound ? (
        <NotFound />
      ) : (
        <>
        <NavBar />
        <div className="movieInfoContainer">
          <div className="movieBackdrop">
            <img src={`${backdropPath}${movieDetails?.backdrop_path}`} />
          </div>

          <div className="movieInfo">
            <div className="movieTitle">
              {movieDetails?.title}
            </div>
            <div className="movieRating">
              <i className="fa-solid fa-star"></i>
              <span>{movieDetails?.vote_average.toFixed(1)}</span>
            </div>
            <div className="movieOverview">
              {movieDetails?.overview}
            </div>
          </div>
        </div>
        </>
      )} 
    </>
  );
};

export default MovieInfo;
