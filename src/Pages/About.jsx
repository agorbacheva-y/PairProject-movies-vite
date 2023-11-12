import "./Movies/Movies.css";
import aboutPg from "../assets/aboutPg.jpg";

const About = () => {
  return (
    <div className="aboutPg">
      <h1>Who We Are</h1>
      <div className="aboutImg">
        <img src={aboutPg}/>
      </div>
      <p>This is a free app for movie-lovers where you can find 
          details about movies from different genres.

          Click on the genre to filter for the type of movie you want to search.
      </p>
    </div>
  );
};

export default About;
