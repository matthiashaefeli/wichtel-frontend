import React, { Component } from 'react';
import ContactImage from '../../images/contact.png';
import './contact.css';

class About extends Component {
  render() {
    return (
      <div className='contactMain'>
        <div className='contactImageBox'>
          <img src={ContactImage} alt='contact' className='contactImage' />
        </div>
        <div className='contactTextBox'>
            <a rel='noreferrer' href='https://wichtelhuss.herokuapp.com/' target='_blank' className='backendLink'>Mein</a> Name ist Tonja Haefeli<br />
            Ich habe selber Kinder im Alter von 20 und 25 Jahren.<br />
            Nach meiner Ausbildung zur Spielgruppenleiterin habe ich das Wichtelhuus gegründet.<br />
            Mir macht es riesen Spass mit den Kindern den Morgen zu verbringen.
            Ich finde es spannend wie sich die Kinder weiterentwickeln und jeden Tag neue interessante,
            lustige, kreative, und abwechslungsreiche Ideen haben.
        </div>
      </div>
    );
  }
}

export default About;