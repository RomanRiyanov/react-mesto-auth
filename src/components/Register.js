import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register ({
    onRegister
}) {
    
    // const [username, setUsername] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();


    const resetForm = () => {
        // setUsername('');
        setPassword('');
        setEmail('');
        setMessage('');
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        onRegister({ email, password })
          .then(resetForm)
          .then(() => history.push('/ducks'))
          .catch((err) => setMessage(err.message || 'Что-то пошло не так'));
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
          <Link to="/login" className="signup__link">Уже зарегистрированы? Войти</Link>
        </div>
      </div>
    )
}

export default Register;