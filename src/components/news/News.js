import axios from 'axios';
import React, { Component } from 'react';
import Loading from '../loading/Loading';
import Detail from './Detail';
import './news.css';

class News extends Component {
  state = {
    error: '',
    isLoaded: false,
    blogs: []
  }

  componentDidMount = () => {
    axios.get('https://wichtelhuss.herokuapp.com/blog_home')
    .then(
      result => {
        this.setState({
          isLoaded: true,
          blogs: result.data
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

  render() {
    const { error, isLoaded, blogs } = this.state;
    let div;

    if (error) {
      div = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      div = <Loading />
    } else {
      div = <div className='blogContainer'>
        {blogs.map(blog => (
          <Detail key={blog.id} detail={blog} type='blog' />
        ))}
      </div>
    }

    return (
      <>
        {div}
      </>
    );
  }
}

export default News;