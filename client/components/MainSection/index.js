import React, { Component } from 'react';

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
    const { service, video } = videos[this.state.videoIndex];
    return (
      <div>
        <SocialVideo service={service} video={video} width={500} height={270} />
        <p>
          <span>{service}: </span>
          <span>{video}</span>
        </p>
        <button onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}>Previous</button>
        <button onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}>Next</button>
      </div>
    );
  }
}
