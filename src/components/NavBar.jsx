import { NavLink } from 'react-router-dom'
import { appPages } from '../routes/routes'
import './navBar.css'
// links to Home, About pages

const NavBar = () => {
  return (
    <nav className='headerMenu'>
      <ul>
        {appPages.map((page, index) => (
          page.menus.includes('header') && !isActive &&(
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
