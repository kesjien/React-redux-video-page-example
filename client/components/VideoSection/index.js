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
  componentDidMount() {
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
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
          <input type="text" className={style.formControl}
            type="text"
            autoFocus="true"
            value={this.state.text}
            onChange={::this.handleChange}
            placeholder="Write some video url here..." />
          <i className={style.iconSearch}></i>
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