import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NotFound from "../components/NotFound";
import MovieInfo from "../components/Movies/MovieInfo";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/movie/:movieTitle" element={<MovieInfo/>} />
  </Routes>
);

export default routes;