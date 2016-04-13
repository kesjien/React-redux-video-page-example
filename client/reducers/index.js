
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import videos from './videos';

export default combineReducers({
  routing,
  videos,
});
