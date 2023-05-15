import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDropzone } from 'react-dropzone';
import './DropZone.scss';
import { MainContext } from '../../contexts/MainContext';

type Props = {
  value: string;
};

const DropZone: React.FC<Props> = ({ value }) => {
  const [images, setImages] = useState<string[]>([]);
  const { setAlbum } = useContext(MainContext);

  useEffect(() => {
    if (images.length) {
      setAlbum(images[images.length - 1], value);
    }
  }, [images, value]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result !== null) {
          const result = reader.result as string;

          setImages((currImages: string[]) => [...currImages, result.toString()]);
        }
      };

      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });

  return (
    <div className="dropzone">
      <div className="dropzone__file-uploader" {...getRootProps()}>
        <input className="dropzone__file-uploader__input" {...getInputProps()} multiple />
        {isDragActive ? (
          <p className="dropzone__file-uploader__message">
            Перетягніть файли сюди ...
          </p>
        ) : (
          <p className="dropzone__file-uploader__message">
            Перетягніть файли сюди або клікніть для вибору файлів
          </p>
        )}
      </div>

      <ul>
        <TransitionGroup className="dropzone__list">
          {images.map(img => (
            <CSSTransition
              key={img}
              timeout={500}
              classNames="item"
            >
              <li className="dropzone__item">
                <img className="dropzone__img" src={img} alt="" />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default DropZone;
