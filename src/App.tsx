import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { cardData } from './data';

export const App: React.FC = () => {
  const [likes, setLikes] = useState<number[]>([]);

  const handleLike = (index: number): void => {
    const newLikes = [...likes];

    if (newLikes[index] === undefined) {
      newLikes[index] = 0;
    }

    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <Router>
      <section className="branches">
        <h2 className="branches__title">
          Our Projects
        </h2>
        <div className="branches__projects">
          {cardData.map((card, index) => (
            <div className="card" key={card.name}>
              <img src={card.img} alt="img" className="card__photo" />
              <div className="card__name">
                <span className="card__name-span">{card.name}</span>
                <div>{card.date}</div>
              </div>
              <div className="card__text">
                <p>{card.text}</p>
              </div>
              <div className="card__inform">
                <Link to={card.link} target="_blank" rel="noopener noreferrer" className="card__inform">
                  <span>READ MORE</span>
                  <span>&gt;&gt;</span>
                </Link>
                <button type="button" onClick={() => handleLike(index)} className="card__like-button">
                  <span>{likes[index]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="branches__quote">
          <div className="quote">
            <img src="https://icapgroupgmbh.com/static/media/quote-svgrepo-com.3aab7c5625d9ee7a4e04372c1b9602f9.svg" alt="quote" className="quote__image" />
            <p className="quote__copy">Opportunities dont happen, you create them.</p>
          </div>
          <p className="branches__quote-name"> — Chris Grosser </p>
        </div>
      </section>
    </Router>
  );
};
