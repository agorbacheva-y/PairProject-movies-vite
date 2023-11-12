import { useNavigate } from "react-router-dom";
import "./Movies/Movies.css";
import errorPg from "../assets/errorPg.jpg";

const NotFound = () => {
  // navigate back to home pg
  const navigate = useNavigate();

  return (
    <div className="container" style={{ backgroundImage: `url(${errorPg})` }}>
      <div className="notFound">
        <h1>Sorry, we can't find that film</h1>
        <p>You'll find lots to explore on the home page.</p>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <div className="attribute">
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@felixmooneeram?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Felix Mooneeram
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/red-cinema-chair-evlkOfkQ5rE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
