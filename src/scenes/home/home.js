import React, { Component } from 'react';
import ShowDisplay from '../../components/show-display/show-display';

class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="ll-section featured">

        </div>
        <div className="page">
          <div className="ll-section continue-watching">
            <div class="section-title">Continue Watching</div>
          </div>
          <div className="ll-section for-you">
            <div class="section-title">For You</div>
          </div>
          <div className="ll-section popular">
            <div class="section-title">Popular Now</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
