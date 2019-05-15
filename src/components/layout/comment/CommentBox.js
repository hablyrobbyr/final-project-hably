import React, { Component } from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  render() {
    return (
      <form className="form-container border p-2">
        <CommentList />
        <CommentForm />
      </form>
    );
  }
}

export default CommentBox;
