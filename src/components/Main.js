import React from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, handleCardDelete, handleCardLike}) {

  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main className="content">

      <section className="profile section">
        <button className="profile__avatar-btn" onClick={onEditAvatar} type="button">
          <img src={currentUser.avatar} alt="Аватар" className="profile__avatar"/>
          <span className="profile__avatar-btn-icon"/>
        </button>

        <div className="profile__info">
          <div className="profile__edit-container">
            <h1 className="profile__name">{currentUser.name}</h1>

            <button type="button" className="profile__button profile__button_type_edit" onClick={onEditProfile}/>
          </div>

          <p className="profile__activity">{currentUser.about}</p>
        </div>

        <button type="button" className="profile__button profile__button_type_add" onClick={onAddPlace}/>

      </section>

      <section className="photos section">
        <ul className="photos__list">
          {
            cards.map(item => {
              return (
                <Card
                  key={item._id}
                  card={item}
                  onCardClick={onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              )
            })
          }
        </ul>
      </section>

    </main>
  )
}

export  default  Main;
