import React, {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({
    isOpen, 
    onCloseButton, 
    onCardAdd,
    isLoaded
}) {

    const newCardDescription = React.useRef();
    const newCardUrl = React.useRef();

    const [isInputValid, setValidity] = useState(true);

    const buttonText = isLoaded ? 'Добавление...' : 'Добавить';

    function handleChangeDescription() {
        setValidity(newCardDescription.current.validity.valid);        
    }
    function handleChangeUrl() {
        setValidity(newCardUrl.current.validity.valid);        
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        onCardAdd({
            name: newCardDescription.current.value,
            link: newCardUrl.current.value
        });
    }

    useEffect(() => {
        newCardDescription.current.value = '';
        newCardUrl.current.value = '';
    }, [isOpen])
    
    return (
        <PopupWithForm 
        onSubmit={handleSubmit}
        onCloseButton = {onCloseButton} 
        isOpen={isOpen}
        isInputValid={isInputValid}
        onCardAdd={onCardAdd}
        name="add-photo" 
        title="Новое место"
        buttonText={buttonText}>
            <input onChange={handleChangeDescription} ref={newCardDescription} className="popup__input" id="place-input" placeholder="Название" type="text" name="place" minLength="2" maxLength="30" required />
            <span className={`popup__input-error place-input-error ${isInputValid || 'popup__input-error_active'}`}>
                {isInputValid ? '' : `${newCardDescription.current.validationMessage}`}
            </span>
            <input onChange={handleChangeUrl} ref={newCardUrl} className="popup__input" id="url-input" placeholder="Ссылка на картинку" type="url" name="imageUrl" required />
            <span className={`popup__input-error url-input-error ${isInputValid || 'popup__input-error_active'}`}>
                {isInputValid ? '' : `${newCardUrl.current.validationMessage}`}
            </span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;