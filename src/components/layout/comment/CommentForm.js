import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div className="form-group">
        <label for="comments">Write your comment here</label>
        <textarea className="form-control mb-2" id="comments" rows="3"></textarea>
        <div className="text-right">
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
      </div>
    );
  }
}

export default CommentForm;
