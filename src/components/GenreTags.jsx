import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './GenreTags.css'

const BurgerMenuIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_429_11066)">
  <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#B0B0B0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_429_11066">
  <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"/>
  </clipPath>
  </defs>
  </svg>
)

export const GenreTags = () => {
  const [ genres, setGenres ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
  };

  useEffect(() => {
    const apiKey = "91bf6de032d334f6beb79054dab13a5f";
    const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    fetchGenre(genreListUrl);
  }, []);

  return (
    <div>
      <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
       <BurgerMenuIcon />
      </div>
      <div className={`genreTags ${isOpen ? 'open' : ''}`}>
       <NavLink className="genreTag" to="/">Home</NavLink>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
            genres.map((genre) => (
              <NavLink className="genreTag" key={genre.id} to={`/genre/${genre.id}`}>{genre.name}</NavLink>
            ))
        )}
      </div>
    </div>
  );
};
