
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import videos from './videos';
import comments from './comments';

export default combineReducers({
  routing,
  videos,
  comments,
});
