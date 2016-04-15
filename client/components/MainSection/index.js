import React, { Component } from 'react';
import style from './style.css';
import Video from './video';

class App extends Component {
  render() {
    const { deleteVideo } = this.props.actions;
    const videos = this.props.videos;
    return (
      <section>
        <div className={style.mainBox}>
          {videos.map(video =>
            <div key={video.id} className={style.videoItem}>
              <span className={style.title}>{video.title}</span>
              <Video service={video.service} video={video.video} />
              <div className={style.infoBox}>
                <div className={style.commentForm}> Add comments ...</div>
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
