import React, { Component } from 'react';

class Meetup extends Component {
  render() {
    const {meetup0, meetup1, meetup2, meetup3, meetup4,
          meetup5, meetup6, meetup7, meetup8}=this.props;
    return (
      <div className="card meetup-card mb-4 mx-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src={meetup0}
              className="card-img border"
              alt="placeholder-card"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body py-0">
              <h5 className="card-title font-weight-bold">{meetup1}</h5>
              <div className="row mt-3">
                <div className="col-2 pr-0">
                  <p>{meetup2}</p>
                  <p>{meetup3}</p>
                  <p>{meetup4}</p>
                </div>
                <div className="col-4 pl-0">
                  <p>{meetup5}</p>
                  <p>{meetup6}</p>
                  <p>{meetup7}</p>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "125px"}}
              >
              {meetup8}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetup;
