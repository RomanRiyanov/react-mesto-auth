import React, {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({
    isOpen, 
    onCloseButton, 
    onUpdateAvatar,
    isLoaded
}) {

    const avatarInput = React.useRef();

    const [isInputValid, setValidity] = useState(true);

    const buttonText = isLoaded ? 'Сохранение...' : 'Сохранить';

    function handleChange() {
        setValidity(avatarInput.current.validity.valid);        
    }

    function handleSubmit (event) {
        event.preventDefault();

        onUpdateAvatar({
            avatar: avatarInput.current.value
        });
    }

    useEffect(() => {
        avatarInput.current.value = '';
    }, [isOpen])

    return (
        <PopupWithForm 
        onSubmit={handleSubmit}
        onCloseButton = {onCloseButton} 
        isOpen={isOpen}
        isInputValid={isInputValid}
        name="add-avatar" 
        title="Обновить аватар"
        buttonText={buttonText}
        windowType='popup__window_type_avatar'>
            <input onChange={handleChange} ref={avatarInput} className="popup__input" id="avatar-input" placeholder="Ссылка на новый аватар" type="url" name="avatarUrl" required />
            <span className={`popup__input-error avatar-input-error ${isInputValid || 'popup__input-error_active'}`}>
                {isInputValid ? '' : `${avatarInput.current.validationMessage}`}
            </span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;


