import React, { Component } from 'react';
import style from './style.css';

class HeaderApp extends Component {

  render() {
    return (
      <header>
        <div className={style.header}>
          <img src="http://htmlcoder.me/preview/the_project/v.1.2/template/images/logo_light_blue.png" />
          <h1>Some smoky video list</h1>
        </div>
      </header>
    );
  }
}

export default HeaderApp;

// import React, { Component } from 'react'
// import TodoTextInput from '../TodoTextInput'

// class Header extends Component {
//   handleSave(text) {
//     if (text.length) {
//       this.props.addTodo(text)
//     }
//   }

//   render() {
//     return (
//       <header>
//         <h1>Todos</h1>
//         <TodoTextInput
//           newTodo
//           onSave={::this.handleSave}
//           placeholder="What needs to be done?" />
//       </header>
//     )
//   }
// }

// export default Header
