import React, { Component } from 'react';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Daily from '../daily/Daily';
import Map from '../map/Map';
import Offer from '../offer/Offer';
import Renovation from '../renovation/Renovation';
import Place from '../place/Place';
import { Route, Switch } from 'react-router-dom';
import Main from '../main/Main';


class App extends Component {
  render() {
    return (
      <>
        <Main />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/daily' component={Daily} />
          <Route exact path='/map' component={Map} />
          <Route exact path='/offer' component={Offer} />
          <Route exact path='/renovation' component={Renovation} />
          <Route exact path='/place' component={Place} />
        </Switch>
      </>
    );
  }
}

export default App;