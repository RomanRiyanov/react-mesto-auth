import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect,
  } from 'react-router-dom';
import logoPath from '../images/logo.svg';

function Header() {
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
              <p>ЭЭЭЭЭЭЭЭКСПЕИМЕНТЭ</p>
              <Link className='header__link' to='/login'>Выйти</Link>
            </div>
          </Route>
          <Route exact path='/register'>
            <Link className='header__link' to='/login'>Войти</Link>
          </Route>
          <Route exact path='/login'>
            <Link className='header__link' to='/register'>Зарегистироваться</Link>
          </Route>
        </Switch>
    </section>
  );
}

export default Header;
