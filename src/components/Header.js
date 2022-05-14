import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div className="content-container">
      <div className='header__content'>
        <NavLink className="header__title" to="/"><h1>Home</h1></NavLink>
        <NavLink className="header__title" to="/help"><h1>Help</h1></NavLink>
      </div>
    </div>

  </header>
);

export { Header as default };
