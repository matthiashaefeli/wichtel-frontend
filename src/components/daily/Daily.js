import React, { Component } from 'react';
import './daily.css';

class Daily extends Component {
  render() {
    return (
      <div className='dailyMain'>
        <p>
          Um 8.30 Uhr werden die Kinder von mir begrüsst und im
          anschliessenden Kreisli tauschen wir Neuikeiten aus, singen und verabschieden uns von den Eltern.
        </p>
        <p>
          Während des ganzen Morgen spielen und basteln wir nach Lust und Laune.
        </p>
        <p>
          Im Verlauf des morgens gibt es feines mitgebrachtes
          Znüni und Getränk oder Honigtee von der Spielgruppe.
        </p>
        <p>
          Die Zeit vergeht wie im Flug und schon ist es 11 Uhr.
        </p>
        <p>
          Nun geht es ans Aufräumen, um nachher noch eine Interessante Geschichte zu hören,
          bevor die Mamis und Papis wieder kommen.
        </p>
        <p>
          Um 11.30 Uhr können die wartenden Eltern ihre Kinder wieder in die Arme schliessen.
        </p>
      </div>
    );
  }
}

export default Daily;