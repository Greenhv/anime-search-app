// elements.js

import Immutable, { Map, Set } from 'immutable';
import switchCases from '../utils';

// Actions

const LOAD_ELEMENTS = 'anime-search-app/elements/LOAD_ELEMENTS';
const SELECT_ELEMENT = 'anime-search-app/elements/SELECT_ELEMENT';

// Initial State

const initialState = Immutable.fromJs({
  elements: [],
  elementselected: {},
});

// Reducer

const reducer = (state = initialState, action) => {
  let cases = Map();

  cases.set(
    LOAD_ELEMENTS,
    state
    .get('elements')
    .clear()
    .merge(Immutable.fromJs(action.elements))
  );

  cases.set(
    SELECT_ELEMENT,
    state
      .get('elementSelected')
      .clear()
      .merge(Immutable.fromJs(action.element))
  );

  return switchCases(cases)(initialState)(action.type)
}

// Actions Creators

export const search = (query) => {

}

export const firstLoading = () => {

}

export const selectElement = (id) => {

}

export default reducer;