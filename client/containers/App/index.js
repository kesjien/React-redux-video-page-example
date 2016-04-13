import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderApp from '../../components/Header';
import MainSection from '../../components/MainSection';
import FooterMain from '../../components/Footer';
import * as TodoActions from '../../actions/todos';
import style from './style.css';

class App extends Component {
  render() {
    const { todos, actions, children, videos } = this.props;
    return (
      <div className={style.normal}>
        <HeaderApp />
        {children}
        <MainSection todos={todos} videos={videos} actions={actions} />
        <FooterMain />
      </div>
    );
  }
}
App.propTypes = {
  actions: React.PropTypes.object,
  todos: React.PropTypes.array,
  videos: React.PropTypes.array,
  children: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    videos: state.videos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
