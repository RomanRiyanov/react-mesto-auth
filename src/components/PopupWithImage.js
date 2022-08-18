import React from "react";

function PopupWithImage({
    card,
    onClose,
    isOpen
}) {

    return (     
        <div className={`popup ${isOpen && 'popup_viewable'}`} id="popup_view-photo">
            <div className="popup__window-image">
                <button onClick={onClose} aria-label="Закрыть" className="close-button" id="close-button_view-photo"></button>
                <figure className="figure">
                    <img className="popup__view-image" src={card ? card.link : null} alt={card ? card.name : null} />
                    <figcaption className="popup__figcaption">{card ? card.name: null}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PopupWithImage;

