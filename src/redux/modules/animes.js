// elements.js

import { OrderedMap, List } from 'immutable';
import { switchCases } from '../utils';

// Actions

const LOAD_ELEMENTS = 'anime-search-app/elements/LOAD_ELEMENTS';
const SELECT_ELEMENT = 'anime-search-app/elements/SELECT_ELEMENT';

// Initial State

const initialState = OrderedMap({
  values: List(),
  valueSelected: null,
});

// Reducer

const reducer = (state = initialState, action = {}) => {
  let cases = {};
  cases[LOAD_ELEMENTS] = state.set('values', action.values);
  cases[SELECT_ELEMENT] = state.set('valueSelected', action.valueSelected);

  return switchCases(cases)(initialState)(action.type);
}

// Actions Creators

export const search = (query) => {

}

export const firstLoading = () => {

}

export const selectElement = (id) => {

}

export default reducer;