import React, { Component } from 'react';
import ContactImage from '../../images/anja.jpg';
import './contact.css';

class About extends Component {
  render() {
    return (
      <div className='contactMain'>
        <div className='contactImageBox'>
          <img src={ContactImage} alt='contact' className='contactImage' />
        </div>
        <div className='contactTextBox'>
            {/* <a rel='noreferrer' href='https://wichtelhuss.herokuapp.com/' target='_blank' className='backendLink'>Ich</a> bin Anja Haefeli<br /> */}
            Ich bin Anja Haefeli<br />
            Ich bin gelernte Fachfrau Betreuung im Bereich Kinder und arbeite jetzt schon mehr als 10 Jahren auf diesem Beruf.<br />
            Ich durfte das Wichtelhuus mit grosser Freude dieses Jahr (2025) von meiner Mutter Tonja Haefeli übernehmen.<br />
            Es macht mir riesen spass die Kinder in ihre Entwicklung zu begleiten und unterstützen. Mit ihnen zu wachsen, spielen, lachen, singen und neue Erinnerungen schaffen.
        </div>
      </div>
    );
  }
}

export default About;