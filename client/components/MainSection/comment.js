import React, { Component } from 'react';
import style from './style.css';
import CommentList from './Comment/commentlist';
import CommentForm from './Comment/commentform';

class CommentBox extends Component {
  render() {
    const { addComment } = this.props.actions;
    const commentsData =
      this.props.comments.filter((comment) => (comment.videoId === this.props.videoId));
    return (
      <div className={style.commentContainer}>
        <div className={style.closeButton}
          onClick={ () => this.props.onClickHandler('close') }>Close</div>
        <h2>Comments</h2>
        <CommentList data={commentsData} />
        <CommentForm
          videoId={this.props.videoId}
          onCommentSubmit={(comment) => addComment(comment)} />
      </div>
    );
  }
}

export default CommentBox;
