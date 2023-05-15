import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Navbar.scss';

import { links } from './constants';

const linkClasses = ({ isActive }: { isActive: boolean }) => cn(
  'navbar__link', { active: isActive },
);

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {links.map(({ href, icon }) => (
          <li key={href} className="navbar__item">
            <NavLink to={href} className={linkClasses}>
              <img
                className="navbar__icon"
                src={icon}
                alt="icon"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
