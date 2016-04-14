import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.css';

class HeaderApp extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    const { searchVideo } = this.props.actions;
    return (
      <header>
        <div className={style.header}>
          <div className={style.link}>
            <Link to="/" > Main section </Link>
            <Link to="video"> Add video </Link>
          </div>
          <img src="http://htmlcoder.me/preview/the_project/v.1.2/template/images/logo_light_blue.png" />
          <h1>Some weird video list</h1>
          <div className="form-group has-feedback">
            <button type="button" onClick={() => searchVideo(this.state.text)} className={style.submitButton}>
                Search
              </button>
            <input
              type="text"
              className={style.formControl}
              onChange={::this.handleChange}
              placeholder="Search" />
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderApp;
