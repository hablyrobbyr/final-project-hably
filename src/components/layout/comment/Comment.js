import React, { Component } from 'react';

class Comment extends Component {
  state = {
    imgSrc:"https://via.placeholder.com/150",
    altImg:"avatar",
    media:{
        heading:"Media heading",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  }
  render() {
    return (
      <div className="media mb-3 mt-2">
        <img src={this.state.imgSrc} class="mr-3" alt={this.state.altImg} />
        <div className="media-body">
          <h5 className="mt-0">{this.state.media.heading}</h5>
          {this.state.media.paragraph}
          </div>
      </div>
    );
  }
}

export default Comment;
