import React from 'react';
import Jenn from './img/Jenn.jpg';
import Duke from './img/Duke.jpg';
import Shekina from './img/Shekina.jpg';
import Gang from './img/Gang.jpg';

class Carousel extends React.Component {


  render() {
    return (
      <div id="Carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Gang} className="d-block w-100" alt="KDS members"/>
          </div>
          <div className="carousel-item">
            <img src={Shekina} className="d-block w-100" alt="Victory"/>
          </div>
          <div className="carousel-item">
            <img src={Duke} className="d-block w-100" alt="Everbody"/>
          </div>
          <div className="carousel-item">
            <img src={Jenn} className="d-block w-100" alt="people"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#Carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#Carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Carousel;
