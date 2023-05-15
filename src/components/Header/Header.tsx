import { useContext } from 'react';
import { useLocation } from 'react-router';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import { MainContext } from '../../contexts/MainContext';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const Header = () => {
  const { user } = useContext(MainContext);
  const location = useLocation().pathname;

  return (
    <header className="header">
      <Search />
      <Navbar />
      <div className="header__bottom">
        {location === '/'
          ? (
            <h1 className="header__title">
              {`Welcome, ${user}.`}
            </h1>
          ) : (
            <BreadCrumbs />
          )}
      </div>
    </header>
  );
};

export default Header;
