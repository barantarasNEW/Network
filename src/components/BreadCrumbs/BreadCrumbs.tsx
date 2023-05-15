import { Link } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  return (
    <Link className="bread-crumbs" to="/">
      <BiLeftArrow size={30} />
      Company Brochures
    </Link>
  );
};

export default BreadCrumbs;
