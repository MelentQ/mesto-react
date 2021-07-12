import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {

  const avatarLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarLinkRef.current.value
    });
  }

  return (
    <PopupWithForm
      name={'avatar'}
      submitBtnText={'Сохранить'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="input__field">
        <input ref={avatarLinkRef} type="url" name="link" id="avatar-link-input" placeholder="Ссылка на картинку" className="input__text input__text_type_link" required/>
        <span className="input__text-error" id="avatar-link-input-error"/>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
