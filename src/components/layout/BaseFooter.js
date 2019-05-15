import React, { Component } from 'react';

class BaseFooter extends Component {
  render() {
    const {footerBase}=this.props;
    return (
      <div className="base-footer">
        {footerBase}
      </div>
    );
  }
}

export default BaseFooter;
