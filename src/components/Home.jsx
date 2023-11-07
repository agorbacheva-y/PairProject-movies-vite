import { useState, useEffect } from "react";

const Home = () => {
  // state to store movies
  const [ movies, setMovies ] = useState(null);

  const apiKey = "91bf6de032d334f6beb79054dab13a5f";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  // function to fetch movies
  const fetchMovies = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);

      setMovies(data);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  useEffect(() => {
    fetchMovies();
  },[])

  useEffect(() => {
    console.log("movies:", movies);
  },[movies])

  return (
    // fetch data
    // store data in state
    <div>
      home pg
    </div>
  );
};

export default Home;
