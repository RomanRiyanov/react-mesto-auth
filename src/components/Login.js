import React, { useState, useEffect } from 'react';

function Login ({
    onLogin
}) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        onLogin({ email, password })
         .then(() => {
            resetForm();
          })
         .catch(err => {
            console.log(err);
          });
      };

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
      </div>
    )
}

export default Login;