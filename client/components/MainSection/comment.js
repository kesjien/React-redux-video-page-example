import React, { Component } from 'react';
import style from './style.css';
import CommentList from './Comment/commentlist';
import CommentForm from './Comment/commentform';

class CommentBox extends Component {
  constructor() {
    super();
    const data = [
      { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
      { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' },
    ];
    this.state = {
      data,
    };
  }
  handleCommentSubmit() {
    console.log('add comment');
  }

  render() {
    return (
      <div className={style.commentContainer}>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
