import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const pokemonDupped = merge({}, action.pokemon);
      newState = pokemonDupped;
      return newState;
    default:
      return state;
  }
};
