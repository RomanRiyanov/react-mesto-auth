import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//import './styles/Login.css';

function Login ({
   onLogin
}) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const resetForm = () => {
        setUsername('');
        setPassword('');
        setMessage('');
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        onLogin({ username, password })
          .then(resetForm)
          .then(() => history.push('/ducks'))
          .catch((err) => setMessage(err.message || 'Что-то пошло не так'));
      };

    return (
        <div className="auth">

        <h1 className="welcome">Вход</h1>

        {/* <p className="auth__error">
          {message}
        </p> */}
        <form className="auth__form" onSubmit={handleSubmit}>
          {/* <label className="label" htmlFor="email">
            Email
          </label> */}
          <input
            id="email"
            required
            name="email"
            placeholder='Email'
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {/* <label className="label" htmlFor="password">
            Пароль
          </label> */}
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
        <div className="auth__signup">
          <Link to="/register" className="signup__link">Уже зарегистрированы? Войти</Link>
        </div>
      </div>
    )
}

export default Login;