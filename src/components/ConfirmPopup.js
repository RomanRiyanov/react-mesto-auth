import PopupWithForm from "./PopupWithForm";

function ConfirmPopup ({
    onSubmit, 
    onCloseButton, 
    isOpen,
    isLoaded
}) {
    
    const Valid = true;

    const buttonText = isLoaded ? 'Удаление...' : 'Удалить?';

    return (
        <PopupWithForm
        onSubmit={onSubmit}
        onCloseButton={onCloseButton} 
        isOpen={isOpen}
        name="delete-photo" 
        title="Подтверждаете удаление?"
        buttonText={buttonText}
        isInputValid={Valid}
        windowType='popup__window_type_confirmation'
        titleType='popup__title_type_confirmation'>
        </PopupWithForm>
    )
}

export default ConfirmPopup;