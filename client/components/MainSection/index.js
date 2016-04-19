import React, { Component } from 'react';
import style from './style.css';
import Video from './video';
import Comment from './comment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  // anti-pattern due tot dynamic component
  handleClick(videoId, close) {
    this.setState({
      clicked: (close) ? false : true,
      videoId,
    });
  }
  getLength(idVideo) {
    const videoComment = this.props.comments.filter((comment) => comment.videoId === idVideo);
    return (videoComment.length) ? videoComment.length : 0;
  }
  render() {
    const { deleteVideo } = this.props.actions;
    const videos = this.props.videos;
    const comments = this.props.comments;
    return (
      <section>
        <div className={style.mainBox}>
          {videos.map(video =>
            <div key={video.id} className={style.videoItem}>
              <span className={style.title}>{video.title}</span>
              <Video service={video.service} video={video.video} />
              <div className={style.infoBox}>
                <div className={style.commentForm}>
                  <a href="#"
                    className={style.addComment}
                    onClick={this.handleClick.bind(this, video.id, false)}>
                  Add comments...
                  </a>
                </div>
                <a href="#"
                  onClick={() => deleteVideo(video.id)}
                  videoId={video.video}
                  className={style.iconDelete}>
                  Delete
                </a>
              </div>
              <div className={style.infoBox}>
                <div className={style.view}>Comments: {this.getLength(video.id)}</div>
              </div>
            </div>
          )}
          {this.state.clicked ? <Comment
            videoId={this.state.videoId}
            comments={comments}
            onClickHandler={(close) => this.handleClick(this.state.videoId, 'close')}
            actions={this.props.actions} /> : null}
        </div>
      </section>
    );
  }
}
App.propTypes = {
  videos: React.PropTypes.array,
  actions: React.PropTypes.object,
  deleteVideo: React.PropTypes.string,
  comments: React.PropTypes.array,
};

export default App;
