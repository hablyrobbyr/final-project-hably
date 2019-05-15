import React, { Component } from 'react';


    // stateless 
    export const About = ({about0, about1, about2}) => {
    return (
      <div className="mx-3">
        <h5 className="font-weight-bold">{about0}</h5>
        <div className="m-3">
          <p>{about1}</p>
          <p>{about2}</p>
        </div>
      </div>
    );
  }

