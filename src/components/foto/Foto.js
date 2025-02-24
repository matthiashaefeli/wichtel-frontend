import axios from 'axios';
import React, { Component } from 'react';
import { storage } from '../../firebase/firebase';
import Loading from '../loading/Loading';
import Detail from './Detail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ErrorImage from '../error/Error';
import './foto.css'

class Foto extends Component {
  state = {
    error: '',
    isLoaded: false,
    fotos: [],
    current_image: 0
  }

  componentDidMount = async () => {
    try {
      // Reference to the "images" folder in Firebase Storage
      const storageRef = ref(storage, "fotos/");
      const result = await listAll(storageRef);

      // Get download URLs for all images
      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      const imageUrls = await Promise.all(urlPromises);

      this.setState({
        isLoaded: true,
        fotos: imageUrls
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error: "Error fetching images"
      });
      console.error("Error fetching images:", error);
    }
  };

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

export default Foto;