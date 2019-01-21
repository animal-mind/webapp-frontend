import { findIndex } from 'lodash';

export const area = state => id => {
  const index = findIndex(state.areas, o => o.id === id);
  return state.areas[index];
};
