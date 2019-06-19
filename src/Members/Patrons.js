import React from 'react';
import {patrons} from './memberList.js';

class Patrons extends React.Component {


  render() {
       const patronList=patrons;
    return (
      <div>
          <h5>Patrons</h5>
          <div className="d-flex py-4">
          {patronList.map((element,id)=>
                (
                    <div className="card" key={id}>
                      <img src={element.image} alt={element.name}/>
                      <h6>{element.name}</h6>
                      <p className="title">{element.title}</p>
                      <p>{element.bio}</p>
                      <p><button>Contact</button></p>
                    </div>
               )
          )}
          </div>
      </div>
    )
  }
}

export default Patrons;
