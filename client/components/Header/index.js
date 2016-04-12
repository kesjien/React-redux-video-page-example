import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.css';

class HeaderApp extends Component {

  render() {
    return (
      <header>
        <div className={style.header}>
          <img src="http://htmlcoder.me/preview/the_project/v.1.2/template/images/logo_light_blue.png" />
          <h1>Some weird video list</h1>
          <div className={style.link}>
            <Link to="/" > Main section </Link>
            <Link to="video"> Add video </Link>
          </div>
          <div className="form-group has-feedback">
            <input type="text" className={style.formControl} placeholder="Search" />
            <i className="icon-search form-control-feedback"></i>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderApp;
