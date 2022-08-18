import React, {useEffect, useState, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup ({
    onCloseButton, 
    onUpdateUser, 
    isOpen,
    isLoaded
}) {
    const currentUser = useContext(CurrentUserContext);

    const [isInputValid, setValidity] = useState(true);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const buttonText = isLoaded ? 'Сохранение...' : 'Сохранить';
    
    function handleChangeName(event) {
        setName(event.target.value);
        setNameError(event.target.validationMessage);
    }
    function handleChangeDescription(event) {
        setDescription(event.target.value);
        setDescriptionError(event.target.validationMessage);     
    }

    function handleSubmit(event) {
        event.preventDefault();

        onUpdateUser({
            name: name,
            about: description,
        })
    }

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [isOpen])

    useEffect(() => {
        if (nameError && descriptionError) {
            setValidity(false);
        } else setValidity(true);

        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    return (
        <PopupWithForm 
        onSubmit={handleSubmit} 
        onCloseButton = {onCloseButton} 
        isOpen={isOpen}
        isInputValid={isInputValid}
        name="edit-profile" 
        title="Редактировать профиль" 
        buttonText={buttonText}>
            <input onChange={handleChangeName} value={name} className="popup__input" id="name-input" placeholder="Имя" type="text" name="name" minLength="2" maxLength="40" required />
            <span className={`popup__input-error name-input-error ${nameError && 'popup__input-error_active'}`}>
                {nameError ? `${nameError}` : ''}
            </span>

            <input onChange={handleChangeDescription} value={description} className="popup__input" id="profession-input" placeholder="Профессия" type="text" name="about" minLength="2" maxLength="200" required />
            <span className={`popup__input-error profession-input-error ${descriptionError && 'popup__input-error_active'}`}>
                {descriptionError ? `${descriptionError}` : ''}
            </span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;