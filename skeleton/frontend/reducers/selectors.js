import values from 'lodash/values';

// Difference between this and the todos setup...
export const selectAllPokemon = state => values(state.entities.pokemon);
