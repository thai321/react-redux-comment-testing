import { SAVE_COMMENT } from '../actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      let comments =  [...state, action.payload];
      return comments;
  }
  return state;
}
