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
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      clicked: true,
    });
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
                    onClick={this.handleClick}>
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
                <div className={style.view}>Views: 0</div>
              </div>
            </div>
          )}
          {this.state.clicked ? <Comment comments={comments} actions={this.props.actions} /> : null}
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
