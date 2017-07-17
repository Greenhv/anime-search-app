import { createStore, applyMiddleware } from "redux";
import reducer from '../modules';

const makeStore = (initialState) => createStore(reducer, initialState);

export default makeStore;