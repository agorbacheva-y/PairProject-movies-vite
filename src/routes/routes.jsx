import { Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies/Index";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import MovieInfo from "../Pages/Movies/MovieInfo";

export const appPages = [
  {
    name: "Home",
    component: Movies,
    menus: ["header", "footer"],
    path: '/'
  },
  {
    name: "About",
    component: About,
    menus: ["footer"],
    path: '/about'
  },
  {
    name: "Movie info",
    component: MovieInfo,
    menus: [],
    path: "/movie/:movieId"
  },
  {
    name: "Not Found",
    component: NotFound,
    menus: [],
    path: "*"
  },
]


const routes = (
  <Routes>
    {appPages.map((page, index) => (
      <Route key={index} path={page.path} element={<page.component />} />
    ))}
  </Routes>
);

export default routes;