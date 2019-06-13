import React from 'react';
import {Link} from 'react-router-dom';


class Default extends React.Component {


  render() {
    return (
        <div className="text-center mx-auto py-5 my-5">
          <h1>Error: 404</h1>
          <h3>Page not Found</h3>
          <h6> Go back to <Link to='/home'>Home</Link></h6>
        </div>
    )
  }
}

export default Default;
