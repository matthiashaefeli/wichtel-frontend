import React, { Component } from 'react';
import './main.css';
import Wichtel from '../../images/wichtel.png';
import Navbar from '../navbar/Navbar';

class Main extends Component {
  render() {
    return (
      <>
        <div className='navMain'>
          <div className='wichtelMain'>
            <img src={Wichtel} alt='wichtel' className='wichtelImage' />
          </div>
        </div>
        <Navbar />
      </>
    );
  }
}

export default Main;