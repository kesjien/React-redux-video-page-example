import qs from 'query-string';
import React, { Component, PropTypes } from 'react';
import style from './style.css';

export default class SocialVideo extends Component {


  getIdFromVideoString(vString) {
    const urlArr = vString.split('/');
    const idString = urlArr[urlArr.length - 1];
    const queryParams = qs.extract(vString);

    return (queryParams && qs.parse(queryParams).v) || idString || '';
  }

  render() {
    const { service, video } = this.props;
    const src = `${SocialVideo.urlMap.get(service)}${this.getIdFromVideoString(video)}`;
    return (
      <div className={style.wrapper}>
        <iframe
          src={src}
          frameBorder="5"
          width="196"
          height="110"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        />
      </div>
    );
  }
}
SocialVideo.propTypes = {
  service: PropTypes.oneOf(['youtube', 'vimeo', 'dailymotion']).isRequired,
  video: PropTypes.string.isRequired,
};
SocialVideo.urlMap = new Map([
  ['youtube', 'http://www.youtube.com/embed/'],
  ['vimeo', 'http://player.vimeo.com/video/'],
  ['dailymotion', 'http://www.dailymotion.com/embed/video/'],
]);

export default SocialVideo;
