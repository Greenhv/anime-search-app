import { combineReducers } from 'redux';
import animes from './animes';

const reducers = combineReducers({
  animes,
});

export default reducers;