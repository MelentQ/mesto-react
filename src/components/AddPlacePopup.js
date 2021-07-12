import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onClose, isOpen, onAddPlace}) {

  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function  handleCardLinkChange(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink
    })
  }

  return (
    <PopupWithForm
      name={'add'}
      submitBtnText={'Создать'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="input__field">
        <input onChange={handleCardNameChange} value={cardName} type="text" name="description" id="description-input" placeholder="Название" className="input__text input__text_type_name" required minLength="2" maxLength="30"/>
        <span className="input__text-error" id="description-input-error"/>
      </div>

      <div className="input__field">
        <input onChange={handleCardLinkChange} value={cardLink} type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="input__text input__text_type_link" required/>
        <span className="input__text-error" id="link-input-error"/>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
