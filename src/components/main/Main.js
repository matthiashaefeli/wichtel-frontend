import React, { Component } from 'react';
import './main.css';
import Wichtel from '../../images/wichtel.png';
import Navbar from '../navbar/Navbar';
import Block from '../../images/blocks.png';
import Lego from '../../images/lego.png';
import Colors from '../../images/colors.png'
import Hous from '../../images/hous.png'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: Math.floor(Math.random() * 4)
    }
  }

  changeCounter = () => {
    if (this.state.counter === 3) {
      this.setState({
        counter: 0
      })
    } else {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  componentDidMount = () => {
    setInterval(this.changeCounter, 5000)
  }

  render() {
    const array = [Block, Lego, Colors, Hous]
    return (
      <>
        <div className='navMain' style={{backgroundImage: `url(${array[this.state.counter]})`}}>
          <div className='wichtelMain'>
            <img src={Wichtel} alt='wichtel' className='wichtelImage' />
          </div>
        </div>
        <Navbar />
      </>
    );
  }
}

export default Main;