import React from 'react';
import './Footer.css';
import KofiModal from '../KofiModal'


class Footer extends React.Component {

  render(){
    return (
<React.Fragment>
    <footer className="site-footer">

      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-8 col-sm-6 col-xs-12 mx-auto">
            <p className="Kofi my-auto mx-auto">Made with <i className="fas fa-heart"></i>  by
               <a href="/" data-toggle="modal" data-target="#KofiModal"> iFok||Kofi</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
   <KofiModal/>
</React.Fragment>)
  }
}

export default Footer;
