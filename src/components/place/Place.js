import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../loading/Loading';
import Detail from './Detail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import ErrorImage from '../error/Error';
import './place.css';

class Place extends Component {
  state = {
    error: '',
    isLoaded: false,
    fotos: [],
    current_image: 0
  }

  componentDidMount = () => {
    // Manually list image filenames stored in public/images/
    const imageList = [
      "/images/places/place_1.jpg",
      "/images/places/place_2.jpg",
      "/images/places/place_3.jpg",
      "/images/places/place_4.jpg",
      "/images/places/place_5.jpg",
      "/images/places/place_6.jpg",
      "/images/places/place_7.jpg",
    ];

    // Simulating an API call to load images
    this.setState({
      isLoaded: true,
      fotos: imageList
    });
  };

  // componentDidMount = () => {
  //   axios.get('https://wichtelhuss.herokuapp.com/place_home')
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
                <div className="fotosFoto">
                  <img
                    src={fotos[current_image]}
                    alt={`Image ${current_image + 1}`}
                    className="image"
                  />
                </div>
                {/* <div className='fotosFoto'>
                  <Detail key={fotos[current_image].id} detail={fotos[current_image]} type='foto' />
                </div> */}
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