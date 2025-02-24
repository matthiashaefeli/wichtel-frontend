import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../loading/Loading';
import Detail from './Detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ErrorImage from '../error/Error';
import './foto.css'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/));

class Foto extends Component {
  state = {
    error: '',
    isLoaded: true,
    fotos: images,
    current_image: 0
  }

  // componentDidMount = () => {
  //   axios.get('https://wichtelhuss.herokuapp.com/fotos_home')
  //   .then(
  //     result => {
  //       this.setState({
  //         isLoaded: true,
  //         fotos: result.data
  //       })
  //     },
  //     error => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       })
  //     }
  //   )
  // }

  changeLeft = () => {
    this.setState((prevState) => ({
      current_image: prevState.current_image === 0 ? prevState.fotos.length - 1 : prevState.current_image - 1
    }));
  };

  changeRight = () => {
    this.setState((prevState) => ({
      current_image: prevState.current_image === prevState.fotos.length - 1 ? 0 : prevState.current_image + 1
    }));
  };

  render() {
    const { error, isLoaded, fotos, current_image } = this.state;
    let div;

    if (error) {
      div = <ErrorImage />
    } else if (!isLoaded) {
      div = <Loading />
    } else if (this.state.fotos.length > 0) {
      div = <div className='fotosMain'>
                <div className='fotosArrow'>
                  <FontAwesomeIcon
                     icon={faArrowCircleLeft}
                     size = '2x'
                     onClick={this.changeLeft}
                  />
                </div>
                <div className='fotosFoto'>
                  <Detail key={current_image} detail={{ image: fotos[current_image] }} type="foto" />
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

export default Foto;