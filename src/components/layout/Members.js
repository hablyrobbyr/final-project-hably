import React, { Component } from 'react';

class Members extends Component {
  render() {
    const {member0, member1, member2, member3, member4}=this.props;
    return (
      <div className="mx-3">
        <div className="row justify-content-between">
          <h5 className="col font-weight-bold">{member0}</h5>
          <h5 className="col text-right mr-3">{member1}</h5>
        </div>
        <div className="media media-members p-3 m-3">
          <img
            src="https://via.placeholder.com/60"
            className="border rounded-circle mr-3"
            alt="avatar-member"
          />
          <div className="media-body">
            <h5 className="mt-0">{member2}</h5>
            <div className="row">
              <div className="col-2 pr-0">
                <p>{member3}</p>
              </div>
              <div className="col-4 pl-0">
                <p>{member4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
