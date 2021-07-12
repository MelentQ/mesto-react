import React from 'react';

function PopupWithForm({title, name, submitBtnText, children, isOpen, onClose, onSubmit}) {
  return(
    <div className={`popup${isOpen ? ' popup_opened' : ''}`} id={`${name}Popup`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <h2 className="popup__title">{title}</h2>

        <form onSubmit={onSubmit} className="input" name={`${name}Form`}>
          {children}

          <button type="submit" className="input__submit-button">
            {submitBtnText}
          </button>
        </form>
      </div>
    </div>
  )
}

export  default  PopupWithForm;
