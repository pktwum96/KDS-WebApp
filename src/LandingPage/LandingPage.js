import React from 'react';
import Carousel from './Carousel.js';
import Stats from './Stats.js';
import AboutHome from './About.js';
import './styles/LandingPage.css';
import Leadership from './Leadership.js';

class LandingPage extends React.Component {


  render() {
    return (
      <div id="Home">
        <div className="text-center">
          <div className="row w-100 m-0">
            <div className="col-md-6 my-auto p-5">
              <h2>Welcome</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="col-md-6 p-0 m-0">
              <Carousel/>
            </div>
          </div>
        </div>
        <AboutHome/>
        <Stats/>
        <Leadership/>
      </div>
    )
  }
}

export default LandingPage;
