import React, { Component } from 'react';

class BaseHeader extends Component {
  render() {
    const {head0, head1, head2, head3}=this.props;
    return (
      <ul className="nav fixed-top justify-content-between text-white-50 py-3 px-2">
        <li className="nav-item text-white font-weight-bold mr-5 ml-2">{head0}</li>
        <li className="nav-item mr-5">{head1}</li>
        <li className="nav-item">{head2}</li>
        <li className="nav-item flex-grow-1 text-right mr-2">{head3}</li>
      </ul>
    );
  }
}

export default BaseHeader;
