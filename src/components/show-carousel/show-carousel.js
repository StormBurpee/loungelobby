import React, { Component } from 'react';
import './show-carousel.scss';
import { Carousel } from 'antd';

class ShowCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {shows: []};
    if(props.shows != null){
      this.state.shows = props.shows;
      console.log(props.shows);
    }
  }

  render() {
    return (
      <div className="show-carousel">
      </div>
    );
  }
}

export default ShowCarousel;
