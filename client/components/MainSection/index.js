import React, { Component } from 'react';
import style from './style.css';
import Video from './video';

class App extends Component {
  render() {
    const { deleteVideo } = this.props.actions;
    return (
      <section>
        <div className={style.mainBox}>
          {this.props.videos.map(video =>
            <div className={style.videoItem}>
              <Video service={video.service} video={video.video} />
              <div className={style.infoBox}>
                <div className={style.commentForm}> Add comments ...</div>
                <div className={style.view}>Views: 0</div>
                <a href="#"
                  onClick={() => deleteVideo(video.video)}
                  videoId={video.video}
                  className={style.iconDelete}>
                  Delete
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
App.propTypes = {
  videos: React.PropTypes.array,
  actions: React.PropTypes.object,
  deleteVideo: React.PropTypes.string,
};

export default App;
