import './Modal.scss';

type Props = {
  title: string;
};

const Modal: React.FC<Props> = ({ title }) => {
  return (
    <div className="modal">
      <p className="modal__title">
        {title}
      </p>
    </div>
  );
};

export default Modal;
