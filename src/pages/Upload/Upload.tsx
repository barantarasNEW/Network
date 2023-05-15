import { useContext, useState, ChangeEvent } from 'react';
import './Upload.scss';
import DropZone from '../../components/DropZone/DropZone';
import Modal from '../../components/Modal/Modal';
import { MainContext } from '../../contexts/MainContext';

const Upload = () => {
  const { albums } = useContext(MainContext);
  const [value, setValue] = useState(albums[0]?.name);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  if (!albums.length) {
    return <Modal title="First, add an album!" />;
  }

  return (
    <section className="upload">
      <p className="upload__tip">
        Select a folder
      </p>

      <select
        className="upload__select"
        value={value}
        onChange={onChange}
      >
        {albums.map(({ name }) => (
          <option
            key={name}
            className="upload__option"
            value={name}
          >
            {name}
          </option>
        ))}
      </select>

      <DropZone value={value} />
    </section>
  );
};

export default Upload;
