import React, { Component } from 'react';
import style from './style.css';

export default class AddVideo extends Component {
  render() {
    return (
      <div>
        <div className={style.formGroup}>
          <input type="text" className={style.formControl}
            placeholder="Write some video url here..." />
          <i className={style.iconSearch}></i>
          <button type="button" className={style.submitButton}>Submit</button>
        </div>
      </div>
    );
  }
}

export default AddVideo;
