import React from 'react';
import Carousel from './Carousel.js';
import Stats from './Stats.js';


class LandingPage extends React.Component {


  render() {
    return (
      <div id="Home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Welcome</h2>
            </div>
            <div className="col-md-6">
              <Carousel/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
