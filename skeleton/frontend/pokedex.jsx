import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
