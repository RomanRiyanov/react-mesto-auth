import React from "react";

import successSignPath from '../images/successSignPath.png';
import failureSignPath from '../images/failureSignPath.png';

function InfoTooltip ({
    isOpen,
    onClose,
    isSuccess,
}) {
    return (
    <div className={`popup ${isOpen && 'popup_viewable'}`}>
        <div className='popup__window'>
            <button onClick={onClose} aria-label="Закрыть" className="close-button"/>
            <form className="popup__form" noValidate>
                {isSuccess 
                    ? <img className="header__logo" src={successSignPath} alt="Значок успех" /> 
                    : <img className="header__logo" src={failureSignPath} alt="Значок провал" /> 
                }
                {isSuccess 
                    ? <p className="popup__title popup__title_type_infoTooltip" >Вы успешно зарегистрировались!</p> 
                    : <p className="popup__title popup__title_type_infoTooltip" >Что-то пошло не так!<br/> Попробуйте ещё раз.</p> 
                }
            </form>
        </div>
    </div>
    )
}

export default InfoTooltip;

