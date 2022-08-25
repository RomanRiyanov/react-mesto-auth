import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register ({
    onRegister,
}) {
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setPassword('');
        setEmail('');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        onRegister({ email, password })
          .then(() => {
            resetForm();
          })
          .catch(err => {
            console.log(err);
          });
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
      </div>
    )
}

export default Register;