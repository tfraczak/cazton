import { combineReducers } from 'redux';
import entities from './entities';
import errors from './errors';
import ui from './ui';

export default combineReducers({
  entities,
  errors,
  ui,
});