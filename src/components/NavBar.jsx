import { NavLink, useNavigate } from 'react-router-dom'
import { appPages } from '../routes/routes'
import './navBar.css'
// links to Home, About pages

const NavBar = () => {
  // useNavigate for home btn
  const navigate = useNavigate();

  return (
    <nav className='headerMenu'>
      <button className="homeBtn" onClick={() => navigate(-1) }>
        <i className="fa-solid fa-chevron-left"></i>
        <span>Home</span>
      </button>
      <ul>
        {appPages.map((page, index) => (
          page.menus.includes('header') && (
            <li key={index}>
              <NavLink to={page.path}>{page.name}</NavLink>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
