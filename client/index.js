import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import configure from './store';
import Foo from './components/VideoSection';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="video" component={Foo} />
        <Route path="addVideo" component={Foo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
