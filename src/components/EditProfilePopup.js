import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={'edit'}
      submitBtnText={'Сохранить'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="input__field">
        <input onChange={handleNameChange} value={name || ''} type="text" name="name" id="name-input" placeholder="Ваше имя" className="input__text input__text_type_name" required minLength="2" maxLength="40"/>
        <span className="input__text-error" id="name-input-error"/>
      </div>

      <div className="input__field">
        <input onChange={handleDescriptionChange} value={description || ''} type="text" name="activity" id="activity-input" placeholder="Чем вы занимаетесь" className="input__text input__text_type_activity" required minLength="2" maxLength="200"/>
        <span className="input__text-error" id="activity-input-error"/>
      </div>

    </PopupWithForm>
  )
}

export  default EditProfilePopup;
