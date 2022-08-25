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
            <div className="popup__form">
                { 
                    <img className="header__logo" src={isSuccess? successSignPath : failureSignPath} alt={isSuccess? "Значок успех" : "Значок провал"} /> 
                }
                {
                    <p className="popup__title popup__title_type_infoTooltip">
                        {isSuccess ? "Вы успешно зарегистрировались!" : "Попробуйте ещё раз."}
                    </p>
                }
            </div>
        </div>
    </div>
    )
}

export default InfoTooltip;
