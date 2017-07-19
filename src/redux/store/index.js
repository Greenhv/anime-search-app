import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import reducer from '../modules';

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {...state};

    Object.keys(newState).forEach((value) => {
      newState[value] = Iterable.isIterable(state[value]) ? state[value].toJS() : state[value];
    });

    return newState;
  }
})

const makeStore = () => createStore(reducer, applyMiddleware(logger));

export default makeStore;