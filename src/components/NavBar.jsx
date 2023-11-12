import { NavLink } from "react-router-dom";
import { appPages } from "../routes/routes";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="headerMenu">
      <ul>
        {appPages.map((page, index) => {
          if (location.pathname === page.path) {
            return null;
          }
          return (
            page.menus.includes("header") && (
              <li key={index}>
                <NavLink to={page.path} className="headerLink">
                  <i className="fa-solid fa-chevron-left"></i>
                  {page.name}
                </NavLink>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
