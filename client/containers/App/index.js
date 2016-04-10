import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderApp from '../../components/Header';
import MainSection from '../../components/MainSection';
import { Link, IndexLink } from 'react-router';
import * as TodoActions from '../../actions/todos';
import style from './style.css';

class App extends Component {
  render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <HeaderApp />
        <div>
        <h1>APP!</h1>
        <ul>
          <li><Link to="video"> Yo </Link></li>
          <li><IndexLink to="/" > IndexLink </IndexLink></li>
        </ul>

        {this.props.children}
      </div>
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  actions: React.PropTypes.object,
  todos: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
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
