
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import videos from './todos';

export default combineReducers({
  routing,
  videos,
});
