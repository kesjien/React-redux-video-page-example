import React, { Component } from 'react';
import style from './style.css';

export default class AddVideo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <div className={style.formGroup}>
          <input type="text" className={style.formControl}
            type="text"
            autoFocus="true"
            value={this.state.text}
            onChange={::this.handleChange}
            placeholder="Write some video url here..." />
          <i className={style.iconSearch}></i>
          <button type="button" onClick={() => deleteTodo(todo.id)} className={style.submitButton}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
AddVideo.propTypes = {
  text: React.PropTypes.string,
};
export default AddVideo;
