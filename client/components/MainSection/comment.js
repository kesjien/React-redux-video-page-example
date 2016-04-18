import React, { Component } from 'react';
import style from './style.css';
import CommentList from './Comment/commentlist';
import CommentForm from './Comment/commentform';

class CommentBox extends Component {
  render() {
    console.log(this.props)
    const { addComment } = this.props.actions;
    return (
      <div className={style.commentContainer}>
        <h1>Comments</h1>
        <CommentList data={this.props.comments} />
        <CommentForm onCommentSubmit={(comment) => addComment(comment)} />
      </div>
    );
  }
}

export default CommentBox;
