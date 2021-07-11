import React from 'react';
import api from "../utils/api.js";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cards);
      })
      .catch(err => console.log(`Ошибка при загрузке данных с сервера: ${err.status}`))
  }, [])

    return(
      <main className="content">

        <section className="profile section">
          <button className="profile__avatar-btn" onClick={onEditAvatar} type="button">
            <img src={userAvatar} alt="Аватар" className="profile__avatar"/>
            <span className="profile__avatar-btn-icon"/>
          </button>

          <div className="profile__info">
            <div className="profile__edit-container">
              <h1 className="profile__name">{userName}</h1>

              <button type="button" className="profile__button profile__button_type_edit" onClick={onEditProfile}/>
            </div>

            <p className="profile__activity">{userDescription}</p>
          </div>

          <button type="button" className="profile__button profile__button_type_add" onClick={onAddPlace}/>

        </section>

        <section className="photos section">
          <ul className="photos__list">
            {
              cards.map(item => {
                return (
                  <Card key={item._id} card={item} onCardClick={onCardClick}/>
                )
              })
            }
          </ul>
        </section>

      </main>
    )
}

export  default  Main;
