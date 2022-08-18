import React, { useEffect, useState, useContext } from "react";
import {CurrentUserContext} from '../context/CurrentUserContext';
import ConfirmPopup from "./ConfirmPopup";

function Card ({
    card, 
    onCardClick, 
    onCardLike, 
    onCardDelete,
    isLoaded
}) {
   
    const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);

    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(elem => elem._id === currentUser._id);

    const deleteButtonClassName = (
        `delete-button ${isOwn || 'delete-button_hidden'}`
    );
    const likeButtonClassName = (
        `like-button ${isLiked && 'like-button_active'}`
    );
    
    function toggleConfirmPopup () {
        setConfirmPopupOpen(!isConfirmPopupOpen);
    }

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function confirmDeleting(event) {
        event.preventDefault();
        onCardDelete(card);
    }

    return (
        <div className="element">
            <img onClick={handleClick} className="element__photo" src={card.link} alt={card.name} />
            <div className="element__container">
                <h2 className="element__title">{card.name}</h2>
                <div className="like_container">
                    <button onClick={handleLikeClick} aria-label="Лайк" className={likeButtonClassName}></button>
                    <p className="like_counter">{card.likes.length}</p>
                </div>
                <button onClick={toggleConfirmPopup} aria-label="Удалить" className={deleteButtonClassName}></button>
                {isConfirmPopupOpen && <ConfirmPopup onSubmit={confirmDeleting} onCloseButton={toggleConfirmPopup} isOpen={isConfirmPopupOpen} isLoaded={isLoaded}></ConfirmPopup>}
            </div>
        </div>
    )
}

export default Card;