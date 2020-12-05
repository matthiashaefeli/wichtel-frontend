import React, { Component } from 'react';
import './detail.css'

class Detail extends Component {
  render() {
    const { title, url, created_at, text } = this.props.detail
    return (
      <div className='newsDetail'>
        <h1>{title}</h1>
        <img
          src={url}
          alt={title}
          className='image'
        /><br />
        <p>{text}</p>
        <span>Publiziert: {created_at}</span>
      </div>
    );
  }
}

export default Detail;