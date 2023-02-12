import React, { Component } from 'react';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Daily from '../daily/Daily';
import Location from '../location/Location';
import Offer from '../offer/Offer';
import News from '../news/News';
import Foto from '../foto/Foto';
import Place from '../place/Place';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/Main';
import './app.css'


class App extends Component {
  render() {
    return (
      <div className='mainDiv'>
        <Main />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/daily' element={<Daily/>} />
          <Route exact path='/location' element={<Location/>} />
          <Route exact path='/offer' element={<Offer/>} />
          <Route exact path='/news' element={<News/>} />
          <Route exact path='/fotos' element={<Foto/>} />
          <Route exact path='/place' element={<Place/>} />
        </Routes>
      </div>
    );
  }
}

export default App;