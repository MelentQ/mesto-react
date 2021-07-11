import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        name={'delete'}
        submitBtnText={'Да'}
        title={'Вы уверены?'}
      />

      <PopupWithForm
        name={'edit'}
        submitBtnText={'Сохранить'}
        title={'Редактировать профиль'}
        children={(
          <>
            <div className="input__field">
              <input type="text" name="name" id="name-input" placeholder="Ваше имя" className="input__text input__text_type_name" required minLength="2" maxLength="40"/>
              <span className="input__text-error" id="name-input-error"/>
            </div>

            <div className="input__field">
              <input type="text" name="activity" id="activity-input" placeholder="Чем вы занимаетесь" className="input__text input__text_type_activity" required minLength="2" maxLength="200"/>
              <span className="input__text-error" id="activity-input-error"/>
            </div>
          </>
        )}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name={'avatar'}
        submitBtnText={'Сохранить'}
        title={'Обновить аватар'}
        children={(
          <>
            <div className="input__field">
              <input type="url" name="link" id="avatar-link-input" placeholder="Ссылка на картинку" className="input__text input__text_type_link" required/>
              <span className="input__text-error" id="avatar-link-input-error"/>
            </div>
          </>
        )}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name={'add'}
        submitBtnText={'Создать'}
        title={'Новое место'}
        children={(
          <>
            <div className="input__field">
              <input type="text" name="description" id="description-input" placeholder="Название" className="input__text input__text_type_name" required minLength="2" maxLength="30"/>
              <span className="input__text-error" id="description-input-error"/>
            </div>

            <div className="input__field">
              <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="input__text input__text_type_link" required/>
              <span className="input__text-error" id="link-input-error"/>
            </div>
          </>
        )}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
