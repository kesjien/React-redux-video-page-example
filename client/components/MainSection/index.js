import React, { Component } from 'react';
import style from './style.css';
import SocialVideo from './social-video';

const videos = [
  {
    service: 'youtube',
    video: 'https://www.youtube.com/watch?v=XxVg_s8xAms',
  },
  {
    service: 'youtube',
    video: 'XuZLtMrCOoU',
  },
  {
    service: 'vimeo',
    video: 'https://vimeo.com/151715092',
  },
  {
    service: 'vimeo',
    video: '148177148',
  },
  {
    service: 'dailymotion',
    video: 'http://www.dailymotion.com/video/x3oc771_la-voiture-du-futur_tech',
  },
  {
    service: 'dailymotion',
    video: 'x3p6f0f_long-story-short-teaser-saison-2_tech',
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0,
    };
  }

  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex,
    });
  }

  render() {
    return (
      <section>
        <div className={style.mainBox}>
          {videos.map(video =>
            <div className={style.videoItem}>
              <SocialVideo service={video.service} video={video.video} />
            </div>
          )}
        </div>
      </section>
    );
  }
}
