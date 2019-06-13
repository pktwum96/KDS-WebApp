import React from 'react';
import Enactus from './img/enactus.jpg';
import Gang from './img/gang.jpg';
import Image from './img/image.jpg';
import Name from './img/name.jpg';
import Group from './img/group.jpg';

class Carousel extends React.Component {


  render() {
    return (
      <div id="Carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Name} className="d-block w-100" alt="KDS members"/>
          </div>
          <div className="carousel-item">
            <img src={Image} className="d-block w-100" alt="Victory"/>
          </div>
          <div className="carousel-item">
            <img src={Gang} className="d-block w-100" alt="Everbody"/>
          </div>
          <div className="carousel-item">
            <img src={Enactus} className="d-block w-100" alt="people"/>
          </div>
          <div className="carousel-item">
            <img src={Group} className="d-block w-100" alt="Everbody"/>
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
