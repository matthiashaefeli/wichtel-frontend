import React, { Component } from 'react';
import Wichtel from '../../images/wichtel.png';
import './error.css';

class componentName extends Component {
  render() {
    return (
      <div className='mainError'>
        <img
          src={Wichtel}
          alt='WichtelHuus'
          className='errorImage'
        />
        <p>Die Bilder konnten nicht geladen werden.</p>
      </div>
    );
  }
}

export default componentName;