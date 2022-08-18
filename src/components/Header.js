import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
  return (
    <section className="header">
        <img className="header__logo" src={logoPath} alt="Логотип Mesto" />
    </section>
  );
}

export default Header;
