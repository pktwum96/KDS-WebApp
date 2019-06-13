import React from 'react';

class Stats extends React.Component {


  render() {
    return (
      <div id="Stats" className="py-5">
          <div className="container text-center">
            <h4>Statistics</h4>
            <div className="row">
                <div className="col-md-3 py-3">
                  <i className="fas fa-users"></i>
                  <h6>73 members</h6>
                </div>
                <div className="col-md-3 py-3">
                  <i className="fas fa-users"></i>
                  <h6>52 alumni</h6>
                </div>
                <div className="col-md-3 py-3">
                  <i className="fas fa-sitemap"></i>
                  <h6>6 internal tournaments</h6>
                </div>
                <div className="col-md-3 py-3">
                  <i className="fas fa-trophy"></i>
                  <h6>80+ accolades (and counting)</h6>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Stats;
