import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

function Register ({
    onRegister,
}) {
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [isRegisterSucceed, setRegisterSucceed] = React.useState(false);

    const history = useHistory();

    const resetForm = () => {
        setPassword('');
        setEmail('');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        onRegister({ email, password })
          .then(() => {
            history.push('/sign-in');
            setRegisterSucceed(true);
            setInfoTooltipOpen(true);
          })
          .then(() => {
            resetForm();
          })
          .catch((err) => {
              setRegisterSucceed(false);
              console.log(`Ошибка при регистрации ${err}`);
              setInfoTooltipOpen(true);
            })
      };

    const closeInfoTooltip = () => {
      setInfoTooltipOpen(false);
    }

    React.useEffect(() => {
      function handleEscapeClose(event) {
          if (event.key === 'Escape') {
            closeInfoTooltip()
          }
      }
      document.addEventListener('keydown', handleEscapeClose);

      return () => {
          document.removeEventListener('keydown', handleEscapeClose);
      }
    }, [])

    return (
      <div className="auth">

        <h2 className="welcome">Регистрирация</h2>

        <form className="auth__form" onSubmit={handleSubmit}>

          <input
            id="email"
            required
            name="email"
            placeholder='Email'
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            id="password"
            required
            name="password"
            placeholder='Пароль'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="auth__button-container">
            <button type="submit" className="auth__link">Зарегистрироваться</button>
          </div>
        </form>
        <div className="auth__signup">
          <Link to="/sign-in" className="signup__link">Уже зарегистрированы? Войти</Link>
        </div>

        <InfoTooltip 
            isOpen = {isInfoTooltipOpen}
            isSuccess = {isRegisterSucceed}
            onClose={closeInfoTooltip}
        />

      </div>
    )
}

export default Register;