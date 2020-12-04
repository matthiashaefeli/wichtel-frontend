import axios from 'axios';
import React, { Component } from 'react';
import './contact.css';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      response: ''
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
    axios.post('https://wichtelhuss.herokuapp.com/questions', { question: {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }})
    .then(function (response) {
      this.setState({
        response: response
      })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }


  render() {
    console.log(this.state.response)
    return (
      <div className='contactFormMain'>
        <div className='contactInfo'>
          Wichtelhuus<br />
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