import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

function Login ({
    onLogin
}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
    const [isRegisterSucceed, setRegisterSucceed] = React.useState(false);

    const history = useHistory();

    const resetForm = () => {
        setEmail('');
        setPassword('');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        onLogin({ email, password })
          .then(() => {
            history.push('/');
            setRegisterSucceed(true);
          })
         .then(() => {
            resetForm();
          })
          .catch((err) => {
            setRegisterSucceed(false);
            console.log(`Ошибка при авторизации ${err}`);
            setInfoTooltipOpen(true);
          });
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

        <h2 className="welcome">Вход</h2>

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
            <button type="submit" className="auth__link">Войти</button>
          </div>
        </form>

      <InfoTooltip 
            isOpen = {isInfoTooltipOpen}
            isSuccess = {isRegisterSucceed}
            onClose={closeInfoTooltip}
        />

      </div>
    )
}

export default Login;