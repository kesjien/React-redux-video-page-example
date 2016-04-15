import React, { Component } from 'react';
import style from './style.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions/actions';

export default class AddVideo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  addVideo() {
    let { dispatch } = this.props;
    let action = Actions.addVideo(this.state.text);
    dispatch(action);
  }

  render() {
    return (
      <div>
        <div className={style.formGroup}>
          <div>
            <span className={style.title}>Video name: </span>
            <input type="text" className={style.formControl}
              type="text"
              autoFocus="true"
              value={this.state.title}
              onChange={::this.handleChangeTitle}
              placeholder="Write some video name here..." />
          </div>
          <div>
            <span className={style.title}>Video url: </span>
            <input type="text" className={style.formControl}
              type="text"
              autoFocus="true"
              value={this.state.text}
              onChange={::this.handleChangeText}
              placeholder="Write some video url here..." />
            <i className={style.iconSearch}></i>
          </div>
          <button type="button" onClick={::this.addVideo} className={style.submitButton}>
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
function mapStateToProps(state) {
  return {
    todos: state.todos,
    videos: state.videos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}
export default connect(
  state => ({ todos: state.todos })
)(AddVideo)