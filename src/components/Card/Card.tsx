import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';
import { IoIosAlbums } from 'react-icons/io';
import './Card.scss';
import { MainContext } from '../../contexts/MainContext';

type Props = {
  name: string;
  count: number;
};

const Card: React.FC<Props> = ({ name, count }) => {
  const { delAlbum } = useContext(MainContext);

  const onDelete = () => {
    delAlbum(name);
  };

  return (
    <li className="card">
      <div className="card__left">
        <IoIosAlbums size={40} className="card__img" />

        <div className="card__description">
          <Link className="card__title" to={`/home/${name}`}>
            {name}
          </Link>

          <div className="card__count-block">
            <img className="card__icon" src="./icons/photo.svg" alt="icon" />
            <p className="card__img-count">
              {count}
            </p>
          </div>
        </div>
      </div>

      <div className="card__right">
        <button onClick={onDelete} type="button">
          <MdCancel size={30} />
        </button>
      </div>
    </li>
  );
};

export default Card;
