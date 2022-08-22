import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect,
  } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header(props) {
  return (
    <section className="header">
        <img className="header__logo" src={logoPath} alt="Логотип Mesto" />
        <Switch>
          {/* <Route>
            {
              () => props.loggedIn === true ? 'ЭЭЭЭЭЭЭЭКСПЕИМЕНТЭ' : <Redirect to="./register" />
            }
          </Route> */}
          <Route exact path='/'>
            <div className='header__link'>
              <p>{props.headerEmail}</p>
              <Link className='header__link' to='/sign-in'>Выйти</Link>
            </div>
          </Route>
          <Route exact path='/sign-up'>
            <Link className='header__link' to='/sign-in'>Войти</Link>
          </Route>
          <Route exact path='/sign-in'>
            <Link className='header__link' to='/sign-up'>Зарегистироваться</Link>
          </Route>
        </Switch>
    </section>
  );
}

export default Header;
