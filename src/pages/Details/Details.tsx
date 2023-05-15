import React from 'react';
import './Details.scss';

const Details = () => {
  return (
    <section className="details">
      <figure>
        <img
          className="details__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-x6iw-63cjgEnlr3UGQoLAFW-Ye948Tqdg&usqp=CAU"
          alt="user's"
        />

        <figcaption>
          <ul className="details__descriptions">
            <li className="details__description">
              <p className="details__description__headline">File Name:</p>
              <p className="details__description__value">File Name</p>
            </li>
            <li className="details__description">
              <p className="details__description__headline">Object name:</p>
              <p className="details__description__value">File Name</p>
            </li>
            <li className="details__description">
              <p className="details__description__headline">Caption:</p>
              <p className="details__description__value">File Name</p>
            </li>
            <li className="details__description">
              <p className="details__description__headline">Keywords:</p>
              <ul className="details__description__keywords">
                <li className="details__description__keyword">Actreess</li>
                <li className="details__description__keyword">Star</li>
              </ul>
            </li>
          </ul>
        </figcaption>
      </figure>
    </section>
  );
};

export default Details;
