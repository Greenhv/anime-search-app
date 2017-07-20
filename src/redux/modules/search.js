// elements.js

import { OrderedMap, List } from 'immutable';
import { switchCases } from '../utils';
import { ajax } from 'rxjs/observable/dom/ajax';
import AnimeRecord from '../../models/anime';

// Actions

const IS_SEARCHING = 'anime-search-app/search/IS_SEARCHING';
const SEARCH_COMPLETED = 'anime-search-app/search/SEARCH_COMPLETED';
const SEARCH_ERROR = 'anime-search-app/search/SEARCH_ERROR';

// Initial State

const initialState = OrderedMap({
  values: List(),
  isSearching: false,
  error: '',
});

// Reducer

const reducer = (state = initialState, action = {}) => {
  let cases = {};
  cases[IS_SEARCHING] = state.set('isSearching', action.isSearching);
  cases[SEARCH_COMPLETED] = state.withMutations(map => {
    map.set('values', action.values).set('isSearching', action.isSearching)
  });
  cases[SEARCH_ERROR] = state.set('error', action.error);

  return switchCases(cases)(initialState)(action.type);
}

// Actions Creators

export const isSearching = (text = '') => ({
  type: IS_SEARCHING,
  isSearching: true,
  text,
})

export const searchCompleted = (response) => {
  let values = [];

  response.data.forEach((value) => {
    const {
      id,
      type,
      attributes: {
        slug,
        canonicalTitle,
        synopsis,
        averageRating,
        posterImage,
      },
    } = value;

    values.push(new AnimeRecord({
      id,
      type,
      slug,
      title: canonicalTitle,
      synopsis,
      averageRating,
      posterImage: posterImage.small,
    }));
  });

  values = List(values);

  return {
    type: SEARCH_COMPLETED,
    values,
  }
}

export const searchError = (error) => ({
  type: SEARCH_ERROR,
  error,
})

// Epics

const API_URI = 'https://kitsu.io/api/edge';

export const searchEpic = (action$, store) => {
  return action$.ofType(IS_SEARCHING)
    .filter(action => action.text)
    .debounceTime(500)
    .mergeMap((payload) =>
      ajax(`${API_URI}/anime?filter[text]=${payload.text}`)
      .map(resp => searchCompleted(resp.response))
      .catch(error => console.log(error))
    )
}


export default reducer;