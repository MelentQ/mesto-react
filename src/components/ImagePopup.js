import React from 'react';

function ImagePopup({card, onClose}) {
  return(
    <div className={`popup${card.name ? ' popup_opened' : ''}`} id="cardPopup">
      <figure className="popup__image-container">
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <img src={card.link} alt={card.name} className="popup__image"/>
        <figcaption className="popup__image-name">{card.name}</figcaption>
      </figure>
    </div>
  )
}

export  default  ImagePopup;
