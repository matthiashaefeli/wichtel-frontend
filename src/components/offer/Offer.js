import React, { Component } from 'react';
import './offer.css';

class Offer extends Component {
  render() {
    return (
      <div className='offerMain'>
        <p>
          In der Spielgruppe Wichtelhuus treffen sich Kinder ab 2 Jahren, zum freien Spielen und
          Werken in einer Gruppe. Auch um erste Erfahrungen ausserhalb des Elternhaus zu machen.
        </p>
        <p>
          Die Kinder lernen ihren Platz in einer Gruppe mit Gleichaltrigen zu finden, sich behaupten,
          Rücksicht nehmen, einander helfen, aufeinander hören, fair streiten und wieder Frieden schliessen.
        </p>
        <p>
          In einer konstanten Gruppe von 8-10 Kindern können die Kinder im sicheren überschaubaren
          Rahmen der Spielgruppe die langsame Ablösung von seinen engsten Bezugspersonen üben.
        </p>
        <p>
          Die Spielgruppe findet von Montag- Freitag jeden Morgen um 8:30 Uhr bis 11:30 Uhr statt.
          Und jeden Montag Nachmittag von 13:30 bis 16:30.
        </p>
        <p>
          Ausser den Schulferien, wo wir uns nach der Schule Boniswil richten.
        </p>
        <p>
          Die Kosten pro Spielgruppenmorgen betragen 30.- Fr.<br />
          bei Geschwistern 27.- Fr.
        </p>
      </div>
    );
  }
}

export default Offer;