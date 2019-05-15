import React, { Component } from 'react';

class Past extends Component {
  render() {
    const {heading0, heading1, pastM0, pastM1, pastM2, pastM3,
          pastM4, pastM5, pastM6, pastM7, pastM8, pastM9, pastM10,
          pastM11, pastM12, pastM13, pastM14}=this.props;
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{heading0}</h5>
          <h5 className="col text-right mr-3">{heading1}</h5>
        </div>
        <div className="row m-3">
          <div className="card past-card col rounded-0 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{pastM0}</h5>
              <p className="card-text">{pastM1}</p>
              <p className="card-text">{pastM2} <span className="text-black-50">{pastM3}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}>
                {pastM4}
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5 mr-2">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{pastM5}</h5>
              <p className="card-text">{pastM6}</p>
              <p className="card-text">{pastM7}<span className="text-black-50">{pastM8}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}>
                {pastM9}
              </button>
            </div>
          </div>
          <div className="card past-card col rounded-0 ml-5">
            <div className="card-body px-2">
              <h5 className="card-title border-bottom border-dark pb-2">{pastM10}</h5>
              <p className="card-text">{pastM11}</p>
              <p className="card-text">{pastM12} <span className="text-black-50">{pastM13}</span></p>
              <button
                type="button"
                className="btn btn-secondary rounded-0"
                style={{width: "85px"}}>
                {pastM14}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Past;
