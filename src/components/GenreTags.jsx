import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import './GenreTags.css'

export const GenreTags = () => {
  const [ genres, setGenres ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const fetchGenre = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGenres(data.genres);
      setIsLoading(false);
      console.log(data.genres);
    } catch (error) {
      console.log(error.response.status);
    }
  }

  useEffect(() => {
    const apiKey = "91bf6de032d334f6beb79054dab13a5f";
    const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    fetchGenre(genreListUrl)
  },[])


  return (
    <div className="genreTags">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
          genres.map((genre) => (
            <Link className="genreTag" key={genre.id} to={`/genre/${genre.id}`}>{genre.name}</Link>
          ))
      )}
    </div>
  )
}