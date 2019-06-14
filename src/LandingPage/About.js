import React from 'react';
import {Link} from 'react-router-dom';

class AboutHome extends React.Component {
  render(){
    return (
      <div id="AboutHome" className="py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 mx-auto">
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to='/about'><button className="btn btn-outline-secondary">Learn More</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutHome;
