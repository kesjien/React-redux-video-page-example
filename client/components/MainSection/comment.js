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
CommentBox.propTypes = {
  actions: React.PropTypes.array,
  addComment: React.PropTypes.function,
  videoId: React.PropTypes.int,
  onClickHandler: React.PropTypes.function,
  comments: React.PropTypes.array,
};
export default CommentBox;
