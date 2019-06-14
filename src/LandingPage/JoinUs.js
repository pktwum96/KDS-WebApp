import React from 'react';
import {Link} from 'react-router-dom';

class JoinUs extends React.Component {
  render(){
    return (
      <div id="JoinUs" className="py-5">
          <div className="container text-center">
               <span clasName="quote">
                    <h6 className="d-flex mx-auto">
                         <i className="fas fa-quote-left ml-auto mr-4"></i>Time spent arguing is almost never wasted
                         <i className="fas fa-quote-right mr-auto ml-4"></i>
                    </h6>
               </span>
               <hr/>
               <Link to='/about'><button className="btn btn-outline-success">Join Us</button></Link>
          </div>
      </div>
    )
  }
}

export default JoinUs;
