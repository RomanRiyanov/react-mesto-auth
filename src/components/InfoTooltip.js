import React from "react";

import successSignPath from '../images/successSignPath.png';
import failureSignPath from '../images/failureSignPath.png';


function InfoTooltip ({
    isTipOpen,
    onCloseButton,
    isSuccess,
}) {
    return (
    <div className={`popup ${isTipOpen && 'popup_viewable'}`} /*id={`popup_${name}`}*/>
        <div className='popup__window'>
            <button onClick={onCloseButton} aria-label="Закрыть" className="close-button" /*id={`close-button_${name}`}*//>
            {/* <h2 className={`popup__title ${titleType}`}>{title}</h2> */}
            <form className="popup__form" /*id={`popup__form_${name}`}*/ noValidate>
                {/* {children} */}
                {isSuccess 
                    ? <img className="header__logo" src={successSignPath} alt="Значок успех" /> 
                    : <img className="header__logo" src={failureSignPath} alt="Значок провал" /> 
                }
                {isSuccess 
                    ? <p className="header__title" >Вы успешно зарегистрировались!</p> 
                    : <p className="header__title" >Что-то пошло не так!<br/> Попробуйте ещё раз.</p> 
                }
            </form>
        </div>
    </div>
    )
}

export default InfoTooltip;

