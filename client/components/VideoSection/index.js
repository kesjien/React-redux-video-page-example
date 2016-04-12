import React, { Component } from 'react';
import style from './style.css';

export default class AddVideo extends Component {
  render() {
    return (
      <div>
        <div className={style.formGroup}>
          <input type="text" className={style.formControl} placeholder="Some video url" />
          <i className={style.iconSearch}></i>
        </div>
      </div>
    );
  }
}

export default AddVideo;
