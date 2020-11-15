import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='navBar'>
        <div className='navBarInner navBarLeft'>
          <div><a href='/' className='links'>home</a></div>
          <div><a href='/offer' className='links'>angebot</a></div>
          <div><a href='/daily' className='links'>ein ganz normaler morgen</a></div>
        </div>
        <div className='navBarInner navBarRight'>
          <div><a href='/place' className='links'>Räumlichkeiten</a></div>
          <div><a href='/location' className='links'>Karte</a></div>
          <div><a href='/news' className='links'>Neues</a></div>
          <div><a href='/contact' className='links'>Kontakt</a></div>
        </div>
      </div>
    );
  }
}

export default Navbar;