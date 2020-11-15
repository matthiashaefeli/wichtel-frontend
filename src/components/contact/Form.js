import React, { Component } from 'react';
import './contact.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    
  }


  render() {
    return (
      <div className='contactFormMain'>
        <div className='contactInfo'>
          Seengerstrasse 7<br />
          5706 Boniswil AG<br />
          062 777 38 32<br />
          079 390 43 19
        </div>
        <div className='contactForm'>
          <h1>Fragen?</h1>
          <form>
            <div>
              <input
                type='text'
                name='name'
                placeholder='name'
                value={this.state.name}
                autoComplete='off'
                onChange={this.handleChange}
                className='inputField'
              />
            </div>
            <div>
              <input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                autoComplete='off'
                onChange={this.handleChange}
                className='inputField'
              />
            </div>
            <div>
              <input
                type='text'
                name='subject'
                placeholder='betreff'
                value={this.state.subject}
                autoComplete='off'
                onChange={this.handleChange}
                className='inputField'
              />
            </div>
            <div>
              <textarea
                name='message'
                placeholder='nachricht'
                value={this.state.message}
                autoComplete='off'
                onChange={this.handleChange}
                className='inputArea'
              />
            </div>
            <div>
              <input
                type='submit'
                value='nachricht senden'
                onClick={this.handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;