import { useContext, useMemo } from 'react';
import { useParams } from 'react-router';
import './AlbumCards.scss';
import { MainContext } from '../../contexts/MainContext';
import Modal from '../Modal/Modal';

const AlbumCards = () => {
  const { albums } = useContext(MainContext);
  const { album } = useParams();
  const visibleAlbums = useMemo(() => {
    return albums.find(currAlbum => currAlbum.name === album)?.photos || [];
  }, [albums, album]);

  return (
    <section className="album-cards">
      {!visibleAlbums.length && <Modal title="Is Empty" />}

      <ul className="album-cards__list">
        {visibleAlbums.map(photo => (
          <li key={photo} className="album-cards__item">
            <img className="album-cards__img" src={photo} alt="user's photos" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AlbumCards;
