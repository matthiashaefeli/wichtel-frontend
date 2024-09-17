import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navBar'>
        <div className='navBarInner navBarLeft'>
          <div><a href='/' className='links'>willkommen</a></div>
          <div><a href='/offer' className='links'>angebot</a></div>
          <div><a href='/place' className='links'>Räumlichkeiten</a></div>
        </div>
        <div className='navBarInner navBarRight'>
          <div><a href='/news' className='links'>aktuell</a></div>
          <div><a href='/fotos' className='links'>fotos</a></div>
          <div><a href='/location' className='links'>Karte</a></div>
          <div><a href='/contact' className='links'>Kontakt</a></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
