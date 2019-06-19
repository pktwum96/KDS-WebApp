import React from 'react';
import Leaders from './Leadership.js';
import Current from './Current.js';
import Alumni from './Alumni.js';
import Patrons from './Patrons.js';
import './styles/Members.css'

class Members extends React.Component {


  render() {
    return (
     <div id="Members" className="container text-center">
           <h3>Members</h3>
           <Leaders/>
           <Current/>
           <Alumni/>
           <Patrons/>
      </div>
    )
  }
}

export default Members;
