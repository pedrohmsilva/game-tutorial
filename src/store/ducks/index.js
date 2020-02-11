import { combineReducers } from 'redux';
import newGame from './newGame';
import simulator from './simulator';

export default combineReducers({
  newGame,
  simulator,
});
