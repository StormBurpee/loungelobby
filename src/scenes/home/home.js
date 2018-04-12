import React, { Component } from 'react';
import ShowDisplay from '../../components/show-display/show-display';
import ShowCarousel from '../../components/show-carousel/show-carousel';

class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="ll-section featured">
          <ShowCarousel shows={[{name: "show1"}, {name: "show2"}]} />
        </div>
        <div className="page">
          <div className="ll-section continue-watching">
            <div className="section-title">Continue Watching</div>
          </div>
          <div className="ll-section for-you">
            <div className="section-title">For You</div>
          </div>
          <div className="ll-section popular">
            <div className="section-title">Popular Now</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
