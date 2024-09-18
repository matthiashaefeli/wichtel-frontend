import React, { Component } from 'react';
import Apalife from '../../images/apalife.png';
import CertificationPdf from '../../images/certifiaction.pdf'
import './news.css';

class News extends Component {
  render() {
    return (
      <div className='newsMain'>
        <p>
          Für die Zukunft unserer Kinder - Nachhaltigkeit im Wichtelhuus
        </p>
        <p>
          Im Wichtelhuus legen wir nicht nur großen Wert auf die Betreuung unserer Kinder,
          sondern auch auf ihre Zukunft. Durch die Zusammenarbeit mit Apalife kompensieren wir den Stromverbrauch und den Abfall,
          der in unserer Spielgruppe anfällt.
          So tragen wir aktiv zum Klimaschutz bei und reduzieren den CO₂-Ausstoß
        </p>
        <p>
          Warum tun wir das? Uns liegt es am Herzen, dass die Welt,
          in der unsere Kinder aufwachsen, auch für zukünftige Generationen lebenswert bleibt.
          Im Wichtelhuus übernehmen wir Verantwortung, damit die Kinder,
          die wir heute betreuen, auch morgen in einer gesunden und nachhaltigen Umwelt spielen und lernen können.
        </p>
        <p>
          Gemeinsam schaffen wir eine bessere Zukunft für unsere Kinder im Wichtelhuus!
        </p>
        <a href='https://apalife.ch/?sponsor=Nils003' target='_blank' rel='noopener noreferrer' className='logoLink'>
          <img src={Apalife} alt='apalife' className='logoImage' />
        </a>
        <div>
          <iframe
            src={CertificationPdf}
            title="PDF Viewer"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    );
  }
}

export default News;