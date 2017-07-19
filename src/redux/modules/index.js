import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import search, { searchEpic } from './search';

export const rootEpic = combineEpics(
  searchEpic,
);

export const rootReducer = combineReducers({
  search,
});