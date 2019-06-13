import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {

  render(){
    return (
    <footer className="site-footer">

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="Kofi my-auto">Made with <i className="fas fa-heart"></i>  by
         <a href="#"> iFok||Kofi</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 d-flex align-items-center">
            <p className="my-auto">Get in Touch: </p>
            <ul className="social-icons my-auto ml-auto">
              <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>)
  }
}

export default Footer;
