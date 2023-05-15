import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Search.scss';
import { HiSearchCircle } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';
import { getSearchWith } from '../../helpers/searchHelper';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith(searchParams, { query: e.target.value || null }),
    );
  };

  const onClickRemove = () => {
    setSearchParams(
      getSearchWith(searchParams, { query: null }),
    );
  };

  return (
    <div className="search">
      <div className="search__block">
        <HiSearchCircle size={30} />
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={query}
          onChange={onChange}
        />
        <button
          type="button"
          className="search__btn"
          onClick={onClickRemove}
        >
          <MdCancel size={25} />
        </button>
      </div>
    </div>
  );
};

export default Search;
