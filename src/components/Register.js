import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InfoTooltip from './InfoTooltip';

function Register ({
    onRegister
}) {
    
    // const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [message, setMessage] = useState('');
    const history = useHistory();


    const resetForm = () => {
        // setUsername('');
        setPassword('');
        setEmail('');
        // setMessage('');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        onRegister({ email, password })
          .then(() => history.push('/sign-in'))
          .then(resetForm)
          .catch((err) => alert('попап с ошибкой REGISTER' `${err.message}`));
      };

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
             isTipOpen = {true}
             onCloseButton = {e => console.log('сим сим закройся')}
             isSuccess = {false}
        />


      </div>
    )
}

export default Register;