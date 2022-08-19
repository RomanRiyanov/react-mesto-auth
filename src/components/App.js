import React, { useEffect } from "react";
import {
    Route,
    Switch,
    Redirect,
    useHistory
  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from "./EditAvatarPopup";
import PopupWithImage from './PopupWithImage';

import Login from './Login';
import ProtectedRoute from "./ProtectedRoute";

import { api } from "../utils/Api";
import {CurrentUserContext} from '../context/CurrentUserContext';

function App() {

    const [currentUser, setCurrentUser] = React.useState({
        name: "",
        about: "",
        avatar: "",
        _id: "",
        cohort: ""
      });

    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

    const [cards, setCards] = React.useState([]);

    const [selectedCard, setSelectedCard] = React.useState([]);

    const [isLoaded, setIsLoaded] = React.useState(false);

    function onEditAvatar() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function onEditProfile() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function onAddPlace() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setImagePopupOpen(false);
    }

    React.useEffect(() => {
        function handleEscapeClose(event) {
            if (event.key === 'Escape') {
                closeAllPopups()
            }
        }
    
        document.addEventListener('keydown', handleEscapeClose);

        return () => {
            document.removeEventListener('keydown', handleEscapeClose);
        }
    }, [])

    function handleUpdateUser (data) {
        setIsLoaded(true);

        api.setUserInfo(data)
        .then(userData => {
            setCurrentUser(userData);
            closeAllPopups();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoaded(false);
        })
    }

    function handleUpdateAvatar (data) {
        setIsLoaded(true);

        api.setUserAvatar(data)
        .then(userData => {
            setCurrentUser(userData);
            closeAllPopups();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoaded(false);
        })
    }

    function handleCardLike (card) {
        const isLiked = card.likes.some(elem => elem._id === currentUser._id);
        setIsLoaded(true);

        api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
            setCards((oldCards) => {
                return oldCards.map((item) => item._id === card._id ? newCard : item)
            })
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoaded(false);
        })
    }

    function handleDeleteClick (card) {
        setIsLoaded(true);

        api.deleteCard(card._id)
        .then(() => {
            setCards((oldCards) => {
                return oldCards.filter((item) => item._id != card._id)
            })
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoaded(false);
        }) 
    }

    function handleAddPlaceSubmit (data) {
        setIsLoaded(true);

        api.addNewCard(data)
        .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setIsLoaded(false);
        })
    }

    React.useEffect(() => {
        api.getUserInfo()
        .then(userData => {
            setCurrentUser(userData);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    React.useEffect(() => {
        api.getCards()
        .then(cardsData => {
            setCards(cardsData);
        })
        .catch(err => {
            console.log(err);
        });   
    }, []);



    const [loggedIn, setLoggedIn] = React.useState(false);
    const history = useHistory();


    function onLogin() {

    }






  return (
    
      <div className="body">
        <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>

                {/* <Header /> */}

                {/* <Main 
                    onEditAvatar = {onEditAvatar} 
                    onEditProfile = {onEditProfile}
                    onAddPlace = {onAddPlace}
                    onCloseButton = {closeAllPopups}
                    onCardClick={handleCardClick}
                    onCardDelete={handleDeleteClick}
                    onCardLike={handleCardLike}
                    cards={cards}
                    isLoaded={isLoaded}>
                </Main>  */}

                <ProtectedRoute 
                    exact path='/'
                    onEditAvatar = {onEditAvatar} 
                    onEditProfile = {onEditProfile}
                    onAddPlace = {onAddPlace}
                    onCloseButton = {closeAllPopups}
                    onCardClick={handleCardClick}
                    onCardDelete={handleDeleteClick}
                    onCardLike={handleCardLike}
                    cards={cards}
                    isLoaded={isLoaded}
                    loggedIn={loggedIn}

                    component={Main}
                />




                <Route exact path='/login'>
                    <Header />
                    <div className="authContainer">
                        <Login onLogin={onLogin} />
                    </div>
                </Route>
                




                <Footer />

                <EditProfilePopup isLoaded={isLoaded} onUpdateUser={handleUpdateUser} onCloseButton = {closeAllPopups} isOpen={isEditProfilePopupOpen} />

                <AddPlacePopup isLoaded={isLoaded} onCardAdd={handleAddPlaceSubmit} onCloseButton = {closeAllPopups} isOpen={isAddPlacePopupOpen} />

                <EditAvatarPopup isLoaded={isLoaded} onUpdateAvatar={handleUpdateAvatar} onCloseButton = {closeAllPopups} isOpen={isEditAvatarPopupOpen} />
                    
                <PopupWithImage isLoaded={isLoaded} onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen}></PopupWithImage>


            </Switch>
        </CurrentUserContext.Provider>
        </div>

    </div>
  );
}

export default App;
