import React, { Component } from 'react';
import style from './style.css';
import SocialVideo from './social-video';

const videos = [
  {
    service: 'youtube',
    video: 'XxVg_s8xAms',
  },
  {
    service: 'youtube',
    video: 'XuZLtMrCOoU',
  },
  {
    service: 'vimeo',
    video: '151715092',
  },
  {
    service: 'vimeo',
    video: '148177148',
  },
  {
    service: 'vimeo',
    video: '151715092',
  },
  {
    service: 'vimeo',
    video: '148177148',
  },

];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0,
    };
  }

  render() {
    return (
      <section>
        <div className={style.mainBox}>
          {videos.map(video =>
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
