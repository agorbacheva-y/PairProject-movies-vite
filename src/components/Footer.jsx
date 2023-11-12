import { NavLink } from "react-router-dom";
import { appPages } from "../routes/routes";
import "./Footer.css";

const Footer = () => {
  return (
    <nav className="footer">
      <ul>
        {appPages.map(
          (page, index) =>
            page.menus.includes("footer") && (
              <li key={index}>
                <NavLink to={page.path} className="footerLink">
                  {page.name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Footer;
