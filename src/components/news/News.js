import React, { Component } from 'react';
import Apalife from '../../images/apalife.png';
import './news.css';

class News extends Component {
  render() {
    return (
      <div className='newsMain'>
        <p>
          Für die Zukunft unserer Kinder - Nachhaltigkeit im Wichtelhuus
        </p>
        <p>
          Im Wichtelhuus legen wir nicht nur grossen Wert auf die Betreuung unserer Kinder,
          sondern auch auf ihre Zukunft. Durch die Zusammenarbeit mit Apalife kompensieren wir den Stromverbrauch und den Abfall,
          der in unserer Spielgruppe anfällt. So tragen wir aktiv zum Klimaschutz bei und reduzieren den CO2-Ausstoss.
        </p>
        <p>
          Warum tun wir das? Uns liegt es am Herzen, dass die Welt, in der unsere Kinder aufwachsen,
          auch für zukünftige Generationen lebenswert bleibt. Im Wichtelhuus übernehmen wir Verantwortung, damit die Kinder,
          die wir heute betreuen, auch morgen in einer gesunden und nachahltigen Umwelt spielen und lernen können.
        </p>
        <p>
          Gemeinsam schaffen wir eine bessere Zukunft für unsere Kinder im Wichtelhuus!
        </p>
        <a href='https://apalife.ch/?sponsor=Nils003' target='_blank' rel='noopener noreferrer' className='logoLink'>
          <img src={Apalife} alt='apalife' className='logoImage' />
        </a>
      </div>
    );
  }
}

export default News;