import React, { Component } from 'react';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Daily from '../daily/Daily';
import Location from '../location/Location';
import Offer from '../offer/Offer';
import News from '../news/News';
import Foto from '../foto/Foto';
import Place from '../place/Place';
import { Route, Switch } from 'react-router-dom';
import Main from '../main/Main';
import './app.css'


class App extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <Main />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/daily' component={Daily} />
          <Route exact path='/location' component={Location} />
          <Route exact path='/offer' component={Offer} />
          <Route exact path='/news' component={News} />
          <Route exact path='/fotos' component={Foto} />
          <Route exact path='/place' component={Place} />
        </Switch>
      </div>
    );
  }
}

export default App;