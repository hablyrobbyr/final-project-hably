import React, { Component } from 'react';

class NextMeetup extends Component {
  render() {
    const {nextM0, nextM1, nextM2, nextM3, nextM4,
          nextM5, nextM6, nextM7, nextM8, nextM9, nextM10}=this.props;
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{nextM0}</h5>
        <div className="next-meetup border p-3 m-3">
          <p className="font-weight-bold">{nextM1}</p>
          <p className="text-black-50">{nextM2}</p>
          <p>
            {nextM3}<br/>
            {nextM4}<br/>
            {nextM5}<br/>
            {nextM6}<br/>
            <br/>
            {nextM7}<br/>
            <br/>
            {nextM8}
            <br/>
            <br/>
            {nextM9}
            <br/>
            {nextM10}
          </p>
        </div>
      </div>
    );
  }
}

export default NextMeetup;
