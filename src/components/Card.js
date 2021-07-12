import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? '' : ' photo__delete-button_hiden';

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? ' photo__like-button_active' : '';

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return(
    <li className="photo">
      <img src={card.link} className="photo__image" alt={card.name} onClick={handleClick}/>
      <button onClick={handleDeleteClick} type="button" className={`photo__delete-button${cardDeleteButtonClassName}`}/>
      <div className="photo__description">
        <h2 className="photo__name">{card.name}</h2>
        <div className="photo__like-container">
          <button onClick={handleLikeClick} type="button" className={`photo__like-button${cardLikeButtonClassName}`}/>
          <span className="photo__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export  default  Card;
