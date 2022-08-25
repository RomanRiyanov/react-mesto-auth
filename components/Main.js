import React, { useEffect, useState, useContext } from "react";

import Card from "./Card";
import {CurrentUserContext} from '../context/CurrentUserContext';


function Main 
        ({
            cards, 
            onCardDelete,
            onCardLike, 
            onEditAvatar, 
            onEditProfile, 
            onAddPlace, 
            onCloseButton, 
            onCardClick,
            children, 
            isOpen,
            isLoaded
        }) {
    
    const currentUser = useContext(CurrentUserContext);
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__updateImage" ></div>
                <img onClick={onEditAvatar} className="profile__image" src={currentUser.avatar || ''} alt="Фото профиля" />
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name || ''}</h1>                    
                    <button onClick={onEditProfile} aria-label="Редактировать профиль" className="edit-button"></button>
                    <h2 className="profile__subtitle">{currentUser.about || ''}</h2>
                </div>
                <button onClick={onAddPlace} aria-label="Добавить фото" className="add-button"/>
                {children}
            </section>

            <section className="elements">
                {cards && cards.map((card) => (
                    <Card 
                    key={card._id} 
                    card={card} 
                    onCardClick={onCardClick} 
                    onCardLike={onCardLike} 
                    onCardDelete={onCardDelete} 
                    isOpen={isOpen} 
                    onCloseButton={onCloseButton}
                    isLoaded={isLoaded}/>
                ))}
            </section>

        </main>
    );
}

export default Main;
