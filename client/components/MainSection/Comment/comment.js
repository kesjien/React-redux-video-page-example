import React, { Component } from 'react';
import style from '../style.css';

class Comment extends Component {
  rawMarkup() {
    const rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className={style.itemComment}>
        <h2 className={style.commentAuthor}>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}
export default Comment;
