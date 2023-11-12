import "./Movies/Movies.css";
import aboutPg from "../assets/aboutPg.jpg";

const About = () => {
  return (
    <div className="aboutPg">
      <h1>Who We Are</h1>
      <div className="aboutImg">
        <img src={aboutPg} />
      </div>
      <p>
        This is a free app for movie-lovers where you can find details about
        movies from different genres. Click on the genre to filter for the type
        of movie you want to search.
      </p>
      <div className="attribute">
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@fkaregan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            {" "}
            Samuel Regan-Asante
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/the-walking-dead-dvd-movie-wMkaMXTJjlQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
