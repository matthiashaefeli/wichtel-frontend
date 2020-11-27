import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../loading/Loading';
import Detail from './Detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './place.css'


class Place extends Component {
  state = {
    error: '',
    isLoaded: false,
    fotos: [],
    current_image: 0
  }

  componentDidMount = () => {
    axios.get('https://wichtelhuss.herokuapp.com/fotos_home')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          fotos: result.data
        })
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }

  changeLeft = () => {
    let counter
    if (this.state.current_image === 0) {
      counter = this.state.fotos.length - 1
    } else counter = this.state.current_image -= 1

    this.setState({
      current_image: counter
    })
  }

  changeRight = () => {
    let counter
    if (this.state.fotos.length - 1 === this.state.current_image) {
      counter = 0
    } else counter = this.state.current_image += 1

    this.setState({
      current_image: counter
    })
  }

  render() {
    const { error, isLoaded, fotos, current_image } = this.state;
    let div;

    if (error) {
      div = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='fotosMain'>
                <div className='fotosArrow'>
                  <FontAwesomeIcon
                     icon={faArrowCircleLeft}
                     size = '2x'
                     onClick={this.changeLeft}
                  />
                </div>
                <div className='fotosFoto'>
                  <Detail key={fotos[current_image].id} detail={fotos[current_image]} type='foto' />
                </div>
                <div className='fotosArrow'>
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    size = '2x'
                    onClick={this.changeRight}
                  />
                </div>
            </div>
    }

    return (
      <>
        {div}
      </>
    );
  }
}

export default Place;