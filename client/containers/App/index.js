import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderApp from '../../components/Header';
import MainSection from '../../components/MainSection';
import FooterMain from '../../components/Footer';
import * as Actions from '../../actions/actions';
import style from './style.css';

class App extends Component {
  render() {
    const { actions, children, videos, comments } = this.props;
    return (
      <div className={style.normal}>
        <HeaderApp actions={actions} />
        {children}
        <MainSection videos={videos} comments={comments} actions={actions} />
        <FooterMain />
      </div>
    );
  }
}
App.propTypes = {
  actions: React.PropTypes.object,
  comments: React.PropTypes.array,
  videos: React.PropTypes.array,
  children: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
    videos: state.videos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
