import { useContext, useState, ChangeEvent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Home.scss';
import { IoMdAddCircle } from 'react-icons/io';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import { MainContext } from '../../contexts/MainContext';

const Home = () => {
  const { albums, setAlbum } = useContext(MainContext);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickAdd = () => {
    setIsModal(true);
  };

  const onSubmit = () => {
    setAlbum('', value);

    setIsModal(false);
    setValue('');
  };

  const onClickCancel = () => {
    setIsModal(false);
    setValue('');
  };

  return (
    <section className="home">
      <button
        type="button"
        className="home__btn"
        onClick={onClickAdd}
      >
        <IoMdAddCircle size={40} />
      </button>

      {!albums.length && <Modal title="Is empty" />}

      <ul className="home__list">
        <TransitionGroup>
          {albums.map(({ name, photos }) => (
            <CSSTransition
              key={name}
              timeout={500}
              classNames="item"
            >
              <Card key={name} name={name} count={photos.length} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>

      {isModal && (
        <div className="home__modal">
          <div className="home__modal__block">
            <form onSubmit={onSubmit}>
              <input
                className="home__modal__input"
                type="text"
                placeholder="Album name"
                value={value}
                onChange={onChange}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
              <button
                type="submit"
                className="home__modal__btn"
              >
                Add
              </button>
            </form>
            <button
              type="button"
              className="home__modal__btn"
              onClick={onClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
