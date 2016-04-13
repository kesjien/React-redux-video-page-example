import React, { Component } from 'react';
import style from './style.css';
import SocialVideo from './social-video';

export default class App extends Component {

  render() {
    return (
      <section>
        <div className={style.mainBox}>
          {this.props.videos.map(video =>
            <div className={style.videoItem}>
              <SocialVideo service={video.service} video={video.video} />
              <div className={style.infoBox}>
                <div className={style.commentForm}> Add comments ...</div>
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
};
