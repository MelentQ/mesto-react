import React from 'react';

function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return(
    <li className="photo">
      <img src={card.link} className="photo__image" alt={card.name} onClick={handleClick}/>
      <button type="button" className="photo__delete-button"/>
      <div className="photo__description">
        <h2 className="photo__name">{card.name}</h2>
        <div className="photo__like-container">
          <button type="button" className="photo__like-button"/>
          <span className="photo__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export  default  Card;
